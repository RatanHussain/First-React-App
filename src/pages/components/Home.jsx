/** @format */

import React from 'react';
import Headers from '../../common/Headers';
import Footer from '../../common/Footer';

export default function Home() {
	return (
        <div>
            <Headers/>
            <div className="bodyTag">
                <p>My Dream</p>
                <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSZUFJoSbVzTq970VfMygBoqq60SwSSX3nYkaodN6gnPK_55WU-W0NXUplyA-lf772e8xkiKUuAvDWQArEZtpM" alt="" />
            </div>
            <Footer/>
		</div>
	);
}
