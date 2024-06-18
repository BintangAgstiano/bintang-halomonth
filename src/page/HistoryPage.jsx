import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
const HistoryPage = () => {
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
                    <div className="content-history">
                        <div className="row d-flex flex-column gap-3" >
                        <div className="col-10 parent-clear">
                            <button className="btn-clear">Bersihkan</button>
                            </div>
                            <div className="box-content-history col-10">
                                <div className="imgH">
                                    <img src="/clock-history.png" width="80" />
                                </div>
                               <div className="tanggal">Tanggal :</div>
                               <div className="content-tanggal">Senin,27 Agustus 2024</div>
                            </div>
                            <div className="line-history col-10">
                                <div className="content-line">
                                    <div className="box-text">
                                        <div className="box-dalam">24 hari
                                        
                                        <FontAwesomeIcon icon={faCaretRight} style={{position:'absolute', transform:"scale(2)",left:'75px',color:"rgb(45, 47, 66)" }}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                    <div className="circle1H"></div>
                                    <div className="circle2H"></div>
                                </div>
                            </div>
                            <div className="box-content-history col-10">
                                <div className="imgH">
                                    <img src="/clock-history.png" width="80" />
                                </div>
                                <div className="tanggal">Tanggal :</div>
                               <div className="content-tanggal">Senin,27 Agustus 2024</div>
                            </div>
                            <div className="line-history col-10">
                                <div className="content-line">
                                <div className="box-text">
                                        <div className="box-dalam">24 hari
                                        
                                        <FontAwesomeIcon icon={faCaretRight} style={{position:'absolute', transform:"scale(2)",left:'75px',color:"rgb(45, 47, 66)" }}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                    <div className="circle1H"></div>
                                    <div className="circle2H"></div>
                                </div>
                            </div>
                            <div className="box-content-history col-10">
                                <div className="imgH">
                                    <img src="/clock-history.png" width="80" />
                                </div>
                            </div>
                            <div className="line-history col-10">
                                <div className="content-line">
                                <div className="box-text">
                                        <div className="box-dalam">24 hari
                                        
                                        <FontAwesomeIcon icon={faCaretRight} style={{position:'absolute', transform:"scale(2)",left:'75px',color:"rgb(45, 47, 66)" }}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                    <div className="circle1H"></div>
                                    <div className="circle2H"></div>
                                </div>
                            </div>
                            <div className="box-content-history col-10">
                                <div className="imgH">
                                    <img src="/clock-history.png" width="80" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section id="footer-history">
                        <div className="box-footer">Copyright ©2024 Bintang Agustiano Effendy</div>
                    </section>
                </section>
            </div>
        </>
    )
}
export default HistoryPage