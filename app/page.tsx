//Location : admin/app/page.tsx

import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <main style={{ 
            backgroundImage: `url('/images/background.jpeg')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="row justify-content-center">
			<div className="col-lg-8 col-md-10 col-sm-12 text-center" style={{ 
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    padding: '20px', 
    borderRadius: '15px'
}}>
    <h2>Selamat Datang</h2>
    <h3>Silahkan masuk terlebih dahulu</h3>
    <LoginLink className="btn btn-primary">Masuk Disini</LoginLink>
</div>
            </div>
        </main>
    );
};