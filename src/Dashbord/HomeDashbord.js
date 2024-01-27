import React from 'react'
import Sidebar from '../Component/Sidebar'
import NavDash from './NavDash'
import Icone1 from './favicon.ico'
import './dashbord.css'
import { motion } from 'framer-motion'


function HomeDashbord() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                easeInOut: [0.17, 0.67, 0.83, 0.67],
                duration: 5,

            }}


            className='d-flex'>
            <div className="col-2 col-md-2 h-100">
                <Sidebar />
            </div>
            <div className="col-10 col-md-10">
                <NavDash />
                <hr />
                <div className="mx-4 mb-3 align-items-start lh-1">
                    <p className=' fw-light  mb-0 fs-2'>Bienvenue sur RED PRODUCT</p>
                    <span className="text-dark">Lorem ipsum dolor sit amet.</span>
                </div>
                <div className='container-fluid border  h-100' style={{ backgroundColor: '#f0f0f0' }}>
                    <div className="row p-4 mb-3">
                        <div className="col-md-4  mt-5  col-sm-6 col-xs-12 d-flex flex-column align-items-center justify-content-center">
                            <div className=" d-flex p-2  align-items-center justify-content-center global_div  ">
                                <img src={Icone1} className='img-fluid rounded-circle ' style={{}} alt="" />
                                <div className='d-flex flex-column   lh-1 ms-2 '>
                                    <p className='flex-start'>125 formulaires</p>
                                    <p className='flex-start'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        {/* deuxieme composant */}
                        <div className="col-md-4  mt-5  col-sm-6 col-xs-12 d-flex flex-column align-items-center justify-content-center">
                            <div className=" d-flex p-2  align-items-center justify-content-center global_div  ">
                                <img src={Icone1} className='img-fluid rounded-circle ' style={{}} alt="" />
                                <div className='d-flex flex-column  lh-1 ms-2 '>
                                    <p className='flex-start'>125 formulaires</p>
                                    <p className='flex-start'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        {/* troisieme composant */}
                        <div className="col-md-4  mt-5  col-sm-6 col-xs-12 d-flex flex-column align-items-center justify-content-center">
                            <div className=" d-flex p-2  align-items-center justify-content-center global_div  " style={{ backgroundColor: '#fff' }}>
                                <img src={Icone1} className='img-fluid rounded-circle ' style={{}} alt="" />
                                <div className='d-flex flex-column  lh-1 ms-2 '>
                                    <p className='flex-start'>125 formulaires</p>
                                    <p className='flex-start'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        {/* quatrieme composant */}
                        <div className="col-md-4  mt-5  col-sm-6 col-xs-12 d-flex flex-column align-items-center justify-content-center">
                            <div className=" d-flex p-2  align-items-center justify-content-center global_div  ">
                                <img src={Icone1} className='img-fluid rounded-circle ' style={{}} alt="" />
                                <div className='d-flex flex-column  lh-1 ms-2 '>
                                    <p className='flex-start'>125 formulaires</p>
                                    <p className='flex-start'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        {/* cinquieme composant */}
                        <div className="col-md-4  mt-5  col-sm-6 col-xs-12 d-flex flex-column align-items-center justify-content-center">
                            <div className=" d-flex p-2  align-items-center justify-content-center global_div  ">
                                <img src={Icone1} className='img-fluid rounded-circle ' style={{}} alt="" />
                                <div className='d-flex flex-column  lh-1 ms-2 '>
                                    <p className='flex-start'>125 formulaires</p>
                                    <p className='flex-start'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        {/* sixieme composant */}
                        <div className="col-md-4  mt-5  col-sm-6 col-xs-12 d-flex flex-column align-items-center justify-content-center">
                            <div className=" d-flex p-2  align-items-center justify-content-center global_div  ">
                                <img src={Icone1} className='img-fluid rounded-circle ' style={{}} alt="" />
                                <div className='d-flex flex-column  lh-1 ms-2 '>
                                    <p className='flex-start'>125 formulaires</p>
                                    <p className='flex-start'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default HomeDashbord