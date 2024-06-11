/** @format */

import React, { useState } from 'react';
import Headers from '../../common/Headers';
import Footer from '../../common/Footer';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function Form() {
	let [value, setValue] = useState({
		uname: '',
		uemail: '',
		uphone: '',
		upassword: '',
		index: '',
	});

	let changedData = (e) => {
		let oldData = { ...value };
		let inputName = e.target.name;
		let inputValue = e.target.value;
		oldData[inputName] = inputValue;
		setValue(oldData);
		};

		let [formData, setFormData] = useState([]);

		let editRow = (indexNumber) => {
		let editingRow = formData.filter((value, inde) => inde === indexNumber)[0];
		editingRow['index'] = indexNumber;
		setValue(editingRow);
		};

		let formSubmit = (e) => {
		e.preventDefault();
		let newUser = {
			uname: value.uname,
			uemail: value.uemail,
			uphone: value.uphone,
			upassword: value.upassword,
		};

		if (value.index === '') {
			let checkduplicate = formData.filter(
				(v) => v.uemail == value.uemail || v.uphone == value.uphone
				);

				if (checkduplicate.length == 1) {
				NotificationManager.error('Email or phone already exist...!')
			} else {
				let userData = [...formData, newUser];

				setFormData(userData);
				setValue({
					uname: '',
					uemail: '',
					uphone: '',
					upassword: '',
					index: '',
				});
			}
		} else {
			let oldData = value.index;
			let userData = formData;

			let checkduplicate = formData.filter(
				(v,i) => (v.uemail == value.uemail || v.uphone == value.uphone) && i !== oldData
			);

			if (checkduplicate == 0) {
				userData[oldData]['uname'] = value.uname;
			userData[oldData]['uemail'] = value.uemail;
			userData[oldData]['uphone'] = value.uphone;
			userData[oldData]['upassword'] = value.upassword;

			setFormData(userData);
			setValue({
				uname: '',
				uemail: '',
				uphone: '',
				upassword: '',
				index: '',
			});
			} else {
				NotificationManager.error('Email or phone already exist...!')
			}


		}
	};

	let deleteRow = (i) => {
		let afterDel = formData.filter((v, index) => i !== index);

		setFormData(afterDel);
	};

	return (
		<div>
			<Headers />

			<NotificationContainer/>

			<div className='division'>
				<div className='container'>
					<form onSubmit={formSubmit}>
						<h1>Sing Up Form</h1>
						<div className='form-input'>
							<label htmlFor='uname'>User Name :</label>
							<input
								value={value.uname}
								type='text'
								onChange={changedData}
								name='uname'
								id='uname'
							/>
						</div>
						<div className='form-input'>
							<label htmlFor='uemail'>Email address :</label>
							<input
								value={value.uemail}
								type='email'
								onChange={changedData}
								name='uemail'
								id='uemail'
							/>
						</div>
						<div className='form-input'>
							<label htmlFor='uphone'>Mobile number :</label>
							<input
								value={value.uphone}
								type='number'
								onChange={changedData}
								name='uphone'
								id='uphone'
							/>
						</div>
						<div className='form-input'>
							<label htmlFor='upassword'>Password :</label>
							<input
								value={value.upassword}
								type='password'
								onChange={changedData}
								name='upassword'
								id='upassword'
							/>
						</div>

						<button>{value.index !== '' ? 'Update' : 'Save'}</button>
					</form>
				</div>

				<div className='table'>
					<table>
						<tr>
							<th>S.L</th>
							<th>User Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Password</th>
							<th>Action</th>
						</tr>

						{formData.length >= 1 ? (
							formData.map((v, i) => {
								return (
									<tr key={i}>
										<td>{i + 1}</td>
										<td>{v.uname}</td>
										<td>{v.uemail}</td>
										<td>{v.uphone}</td>
										<td>{v.upassword}</td>
										<td>
											<button onClick={() => deleteRow(i)}>Delete</button>
											<button onClick={() => editRow(i)}>Edit</button>
										</td>
									</tr>
								);
							})
						) : (
							<tr>
								<td colSpan={6}>Data Not Found.</td>
							</tr>
						)}
					</table>
				</div>
			</div>

			<Footer />
		</div>
	);
}
