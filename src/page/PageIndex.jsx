import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { format } from "date-fns";
import { id } from "date-fns/locale";
import Swal from "sweetalert2"; // Import SweetAlert2
const PageIndex = () => {
    const [dateList, setDate] = useState(() => {
        let storage = localStorage.getItem('history');
        if (storage) {
            return JSON.parse(storage)

        } else {
            return []
        }
    })
    const [showHalomonth,setHalomonth]=useState(true);
    const [dateNow, setDateNow] = useState();
    useEffect(() => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = (newDate.getMonth() + 1).toString().padStart(2, 0);
        let year = newDate.getFullYear();
        let dateCurrent = `${year}-${month}-${date}`
       
        const formattedDate = format(new Date(dateCurrent), 'EEEE, d MMMM yyyy', { locale: id }); // Memformat tanggal
        setDateNow(formattedDate)
        setTimeout(() => {
            setHalomonth(false);
        }, 1500);
    }, [])
    function handleToday() {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to submit today's date?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, submit it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = (newDate.getMonth() + 1).toString().padStart(2, 0);
        let year = newDate.getFullYear();
        let dateCurrent = `${year}-${month}-${date}`
        let arrDate = [dateCurrent, ...dateList]
        setDate(arrDate);
        localStorage.setItem('history', JSON.stringify(arrDate));
        Swal.fire({
            title: 'Submitted!',
            text: 'Your date has been submitted.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
            title: 'Cancelled',
            text: 'Your submission has been cancelled.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});
    }
    function handleChangeToday(e) {
        e.preventDefault();

        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to submit this date?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, submit it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
        let data = e.target.date.value
        let arrDate2 = [data, ...dateList]
        setDate(arrDate2);
        localStorage.setItem('history', JSON.stringify(arrDate2));
        Swal.fire({
            title: 'Submitted!',
            text: 'Your date has been submitted.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
            title: 'Cancelled',
            text: 'Your submission has been cancelled.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});
    }
    return (
        <>
            <div className="containerr">
                <section id="section1">
                    <div className="navbar d-flex align-items-center justify-content-between">
                        <div className="left-navbar d-flex align-items-center" >
                            <img src="/logo.png" width="30" />
                            <div className="text-navbar">
                                halomonth
                            </div>
                        </div>
                        <div className="right-navbar">
                            <Link to={'/history'}> <button type="button" class="btn">History</button></Link>
                        </div>
                    </div>
                </section>
                <section id="section2" className=" row-12 mt-5 mb-5">
                    <div className=" boxPeringatan ml-1">
                        <div className=" col-11 col-lg-5 col-md-8 col-sm-8 mt-3 p-3 content d-flex align-items-center">
                            <img src="/warning.png" className="img " />
                            <h6 className="mt-2 ">Peringatan!! Harus memilih salah satu di bawah ini</h6>
                        </div>
                    </div>
                </section>
                <section id="section3" className="mt-5">
                    <div className="container-sc3 ">
                        <div className="content-s3 col-12">

                            <div className="box-circle">
                                <div className="circle1"></div>
                                <div className="circle2"></div>
                                <div className="circle3"></div>
                            </div>
                            <div className="hari-ini d-flex">
                                <img src="/clock.png" className="img-clock" width="80" />
                                <div className="date d-flex flex-column" >
                                    <span className="title-hari-ini">HARI INI :</span>
                                    <span className="date-hari-ini">{dateNow}</span>
                                </div>
                            </div>
                            <button className="btn2" onClick={() => handleToday()}>✓ Submit</button>

                        </div>
                    </div>
                </section>
                <section id="section-line">
                    <div className="box-line">
                        <span></span>
                        <span>ATAU</span>
                        <span></span>
                    </div>
                </section>
                <section id="section4" className="mt-5">
                    <div className="container-sc3 ">
                        <div className="content-s3  col-12">

                            <div className="box-circle">
                                <div className="circle1"></div>
                                <div className="circle2"></div>
                                <div className="circle3"></div>
                            </div>
                            <form onSubmit={handleChangeToday}>
                                <div className="hari-ini  d-flex" style={{ marginLeft: "-5px" }}>
                                    <img src="/women.png" className="img-clock" width="120" />
                                    <div className="date d-flex flex-column" >
                                        <span className="title-hari-ini mt-2">SEARCH TANGGAL :</span>
                                        <br />
                                        <div class="input-group mb-3" >
                                            <span class="input-group-text" id="basic-addon1"><img src="/timer.png" width="20" /></span>
                                            <input required type="date" name="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />

                                        </div>

                                    </div>
                                </div>
                                <button className="btn2">✓ Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
                <section id="footer">
                    <div className="box-footer">Copyright ©2024 Bintang Agustiano Effendy</div>
                </section>
{showHalomonth &&
                <div className="halomonth d-flex justify-content-center align-items-center gap-2" >
                    <div className="lineRotate"></div>
                    <img src="/logo-white.png" width="70" height={60} />
                    <div className="d-flex flex-column">
                        <div className="title-halomonth">halomonth</div>
                        <span className="byName" >By Bintang Agustiano Effendy</span>
                    </div>
                </div>
}
            </div>
        </>
    )
}
export default PageIndex