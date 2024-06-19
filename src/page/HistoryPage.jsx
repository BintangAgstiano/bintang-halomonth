import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import { format } from "date-fns";
import { id } from "date-fns/locale";
import Swal from "sweetalert2"; // Import SweetAlert2

const HistoryPage = () => {
    const [getDate, setDate] = useState([]);
    useEffect(() => {
        const storedHistory = localStorage.getItem('history');
        if (storedHistory) {

            let dateHistory = JSON.parse(storedHistory);
            setDate(dateHistory)
        }
    }, []);

    function handleClear() {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete history?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, submit it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('history')
                setDate([])
        Swal.fire({
            title: 'Submitted!',
            text: 'Your history has been delete.',
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
})
    }
    return (
        <>
        
        
            <div className="containerr">
                <section id="sectionHistory">
                    <div className="navbar d-flex align-items-center justify-content-between">
                        <div className="left-navbar d-flex align-items-center" >
                            <img src="/logo.png" width="30" />
                            <div className="text-navbar">
                                halomonth
                            </div>
                        </div>
                        <div className="right-navbar">
                            <Link to={'/'}> <button type="button" class="btn">Kembali</button></Link>
                        </div>
                    </div>
                    {getDate.length > 0 &&
                        <div className="content-history">
                            <div className="row d-flex flex-column gap-3 " >
                                {getDate.length > 0 ? (
                                    <div className="col-10 parent-clear">
                                        <button onClick={() => handleClear()} className="btn-clear">Bersihkan</button>
                                    </div>
                                ) : ('')}

                                {getDate.map((item, index) => {
                                    const formattedDate = format(new Date(item), 'EEEE, d MMMM yyyy', { locale: id }); // Memformat tanggal
                                    return (
                                        <>

                                            {index == 0 ? (
                                                // Untuk data pertama tanpa garis
                                                <div className="parent-box-ch mb-4" >
                                                    <div className="d-flex" style={{ width: 'max-content' }}>
                                                        <div className="circle-tes"></div>
                                                    </div>
                                                    <div className="box-content-history col-8">
                                                        <div className="imgH">
                                                            <img src="/clock-history.png" width="80" alt="clock history" />
                                                        </div>
                                                        <FontAwesomeIcon
                                                            icon={faCaretLeft}
                                                            style={{ position: 'absolute', transform: "scale(3)", top: '58px', left: '-5px', color: "white" }}
                                                        />
                                                        <div className="tanggal">Tanggal :</div>
                                                        <div className="content-tanggal">{formattedDate}</div>
                                                    </div>
                                                </div>
                                            ) : (
                                                // Untuk data kedua dan seterusnya dengan garis
                                                <>
                                                    <div className="parent-box-ch mt-4" >
                                                        <div className="d-flex" style={{ width: 'max-content', position: 'relative' }}>
                                                            <div className="content-line"></div>
                                                            <div className="circle-tes"></div>
                                                        </div>
                                                        <div className="box-content-history col-8">
                                                            <div className="imgH">
                                                                <img src="/clock-history.png" width="80" alt="clock history" />
                                                            </div>
                                                            <FontAwesomeIcon
                                                                icon={faCaretLeft}
                                                                style={{ position: 'absolute', transform: "scale(3)", top: '58px', left: '-5px', color: "white" }}
                                                            />
                                                            <div className="tanggal">Tanggal :</div>
                                                            <div className="content-tanggal">{formattedDate}</div>
                                                        </div>
                                                    </div>
                                                    <div className="line-history col-10">
                                                        <div className="content-line">
                                                            <div className="box-text">
                                                                <div className="box-dalam">24 hari
                                                                    <FontAwesomeIcon
                                                                        icon={faCaretRight}
                                                                        style={{ position: 'absolute', transform: "scale(2)", left: '75px', color: "rgb(45, 47, 66)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="circle1H"></div>
                                                            <div className="circle2H"></div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                        </>
                                    );
                                })}




                            </div>
                        </div>
                    }
                    {getDate.length === 0 &&
                        <div className="content-history d-flex justify-content-center align-items-center border">
                            <p style={{ color:'gray' }}>Tidak ada history</p>
                        </div>
                    }
                    <section id="footer-history">
                        <div className="box-footer">Copyright ©2024 Bintang Agustiano Effendy</div>
                    </section>
                </section>
            </div>
        </>
    )
}
export default HistoryPage