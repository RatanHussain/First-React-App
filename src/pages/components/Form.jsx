/** @format */

import React, { useState } from 'react';
import Headers from '../../common/Headers';
import Footer from '../../common/Footer';
import 'react-bootstrap/dist/react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Row, Container, Col, Table } from 'react-bootstrap';

export default function Form() {
	let [formData, setFormData] = useState({
		inputName: '',
		inputEmail: '',
		inputPhone: '',
		inputPassword: '',
		inputIndex: '',
	});
	let formSubmit = (event) => {
		let inputedName = event.target.name;
		let inputedValue = event.target.value;
		let oldData = { ...formData };
		oldData[inputedName] = inputedValue;
		setFormData(oldData);
	};

	let [userData, setUserData] = useState([]);

	let formHandle = (event) => {
		event.preventDefault();
		if (formData.inputIndex === '') {
			let checkDuplicate = userData.filter(
				(v, i) =>
					v.inputEmail == formData.inputEmail ||
					v.inputPhone == formData.inputPhone
			);

			if (checkDuplicate.length !== 0) {
				toast.error('Email or phone already exist.');
			} else {
				let oldData = [...userData, formData];
				setUserData(oldData);
				setFormData({
					inputName: '',
					inputEmail: '',
					inputPhone: '',
					inputPassword: '',
					inputIndex: '',
				});
				toast.success('Save Complete');
			}
		} else {
			let checkDuplicate = userData.filter(
				(v, i) =>
					(v.inputEmail == formData.inputEmail ||
						v.inputPhone == formData.inputPhone) &&
					i !== formData.inputIndex
			);

			if (checkDuplicate.length !== 0) {
				toast.error('Email or phone already exist..');
			} else {
				let formindex = formData.inputIndex;
				let userInfo = userData;
				userInfo[formindex]['inputName'] = formData.inputName;
				userInfo[formindex]['inputEmail'] = formData.inputEmail;
				userInfo[formindex]['inputPhone'] = formData.inputPhone;
				userInfo[formindex]['inputPassword'] = formData.inputPassword;

				setUserData(userInfo);
				setFormData({
					inputName: '',
					inputEmail: '',
					inputPhone: '',
					inputPassword: '',
					inputIndex: '',
				});
				toast.success('Updated Success');
			}
		}
	};

	let deletRow = (indexNumber) => {
		let AfterDelete = userData.filter((value, index) => index !== indexNumber);
		setUserData(AfterDelete);
	};
	let updateRow = (indexNumber) => {
		let editing = userData.filter((v, i) => i == indexNumber)[0];

		editing['inputIndex'] = indexNumber;
		setFormData(editing);
	};

	return (
		<div>
			<ToastContainer />
			<Headers />
			<Container fluid>
				<Row>
					<Col className='col-lg-6 col-ms-12'>
						<form onSubmit={formHandle} className='form-control mt-5 pb-5'>
							<h1 className='text-center my-3'>User Form</h1>
							<div className='form-group text-start'>
								<label className='form-label text-left'>User Name</label>
								<input
									value={formData.inputName}
									onChange={formSubmit}
									type='text'
									name='inputName'
									className='form-control'
								/>
							</div>
							<div className='form-group text-start'>
								<label className='form-label text-start'>Email Address</label>
								<input
									value={formData.inputEmail}
									onChange={formSubmit}
									type='text'
									name='inputEmail'
									className='form-control'
									required
								/>
							</div>
							<div className='form-group text-start'>
								<label className='form-label text-start'>Phone Number</label>
								<input
									value={formData.inputPhone}
									onChange={formSubmit}
									type='text'
									name='inputPhone'
									className='form-control'
								/>
							</div>
							<div className='form-group text-start'>
								<label className='form-label text-start'>Password</label>
								<input
									value={formData.inputPassword}
									onChange={formSubmit}
									type='text'
									name='inputPassword'
									className='form-control'
								/>
							</div>
							<button className='btn btn-info form-control mt-4'>
								{formData.inputIndex === '' ? 'Save' : 'Update'}
							</button>
						</form>
					</Col>
					<Col className='col-lg-6 col-ms-12'>
						<h2 className='text-center mt-5'>User Data</h2>
						<Table striped hover bordered>
							<thead className='text-center'>
								<tr>
									<th>S.L</th>
									<th>User Name</th>
									<th>Email</th>
									<th>Phone</th>
									<th>Password</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{userData.length !== 0 ? (
									userData.map((value, index) => {
										return (
											<tr>
												<td>{index + 1}</td>
												<td>{value.inputName}</td>
												<td>{value.inputEmail}</td>
												<td>{value.inputPhone}</td>
												<td>{value.inputPassword}</td>
												<td>
													<button
														onClick={() => deletRow(index)}
														className='btn btn-outline-info'>
														Delete
													</button>
													<button
														onClick={() => updateRow(index)}
														className='btn btn-outline-info'>
														Edit
													</button>
												</td>
											</tr>
										);
									})
								) : (
									<tr>
										<td colSpan={6} className='fw-bold'>
											Data not found.
										</td>
									</tr>
								)}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}
