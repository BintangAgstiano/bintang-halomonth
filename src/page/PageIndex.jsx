import { Link } from "react-router-dom"

const PageIndex = () => {
    return (

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
                                <span className="date-hari-ini">Senin,27 Agustus 2024</span>
                            </div>
                        </div>
                        <button className="btn2">✓ Submit</button>

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
                        <div className="hari-ini  d-flex" style={{ marginLeft: "-5px" }}>
                            <img src="/women.png" className="img-clock" width="120" />
                            <div className="date d-flex flex-column" >
                                <span className="title-hari-ini mt-2">SEARCH TANGGAL :</span>
                                <br />

                                <div class="input-group mb-3" >
                                    <span class="input-group-text" id="basic-addon1"><img src="/timer.png" width="20" /></span>
                                    <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />

                                </div>

                            </div>
                        </div>
                        <button className="btn2">✓ Submit</button>

                    </div>
                </div>
            </section>
            <section id="footer">
                <div className="box-footer">Copyright ©2024 Bintang Agustiano Effendy</div>
            </section>
        </div>

    )
}
export default PageIndex