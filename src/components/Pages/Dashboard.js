import React from 'react'
import { connect } from 'react-redux'
import {openModal,deleteGroup} from '../../redux/Action'
import Modal from '../common/modal/modal'
import $ from 'jquery'

function Dashboard(props) {
    const openModal = () => {
        $("#testmodal").modal("show");
    }
    return (
        <div>
            <div className="row d-flex header justify-content-between">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="151.798" height="38" viewBox="0 0 151.798 38" className="caavo-logo block">
                        <title>Caavo</title>
                        <path className="caavo-logo__text" d="M88.612 16.27a3.06 3.06 0 0 0-1.1-.814 2.955 2.955 0 0 0-1.067-.2 3.563 3.563 0 0 0-1.445.28 3.313 3.313 0 0 0-1.112.784 3.556 3.556 0 0 0-.72 1.17 4.007 4.007 0 0 0-.253 1.438 4.413 4.413 0 0 0 .254 1.525 3.58 3.58 0 0 0 .71 1.207 3.352 3.352 0 0 0 1.11.8 3.476 3.476 0 0 0 1.444.29 2.656 2.656 0 0 0 1.213-.3 3.32 3.32 0 0 0 1.1-.95l1.51 1.074a4.11 4.11 0 0 1-1.7 1.395 5.293 5.293 0 0 1-2.134.43 6 6 0 0 1-2.187-.39 4.9 4.9 0 0 1-2.84-2.784 5.71 5.71 0 0 1-.407-2.19 5.956 5.956 0 0 1 .406-2.245 5.03 5.03 0 0 1 1.128-1.722 4.944 4.944 0 0 1 1.717-1.1 6.028 6.028 0 0 1 2.188-.386 5.008 5.008 0 0 1 1.94.37 4.52 4.52 0 0 1 1.663 1.256zm11.43-2.413h1.583l4.43 10.286h-2.092L103 21.79h-4.46l-.93 2.354h-2.043zm2.324 6.363l-1.584-4.184-1.612 4.184h3.2zm13.282-6.363h1.583l4.44 10.286h-2.09l-.957-2.354h-4.46l-.93 2.35h-2.05zm2.324 6.363l-1.584-4.184-1.61 4.184h3.2zm8.306-6.362h2.106l2.804 7.772 2.89-7.772h1.976L131.9 24.143h-1.583l-4.04-10.285m14.613 5.186a5.958 5.958 0 0 1 .41-2.244 5.027 5.027 0 0 1 1.126-1.72 4.93 4.93 0 0 1 1.713-1.1 6.007 6.007 0 0 1 2.18-.386 6.107 6.107 0 0 1 2.21.356 4.82 4.82 0 0 1 1.73 1.082 4.984 4.984 0 0 1 1.13 1.714 5.89 5.89 0 0 1 .404 2.237 5.7 5.7 0 0 1-.406 2.193 5.014 5.014 0 0 1-1.133 1.7 5.172 5.172 0 0 1-1.727 1.11 6.124 6.124 0 0 1-2.206.415 6.02 6.02 0 0 1-2.187-.38 4.9 4.9 0 0 1-2.84-2.78 5.715 5.715 0 0 1-.408-2.19m1.916-.115a4.43 4.43 0 0 0 .257 1.525 3.578 3.578 0 0 0 .72 1.204 3.338 3.338 0 0 0 1.11.8 3.5 3.5 0 0 0 1.446.29 3.548 3.548 0 0 0 1.453-.29 3.326 3.326 0 0 0 1.12-.8 3.57 3.57 0 0 0 .72-1.208 4.442 4.442 0 0 0 .253-1.526 4.028 4.028 0 0 0-.253-1.44 3.558 3.558 0 0 0-.72-1.17 3.28 3.28 0 0 0-1.117-.784 3.61 3.61 0 0 0-1.453-.282 3.556 3.556 0 0 0-1.445.284 3.29 3.29 0 0 0-1.11.784 3.567 3.567 0 0 0-.72 1.17 4.016 4.016 0 0 0-.255 1.438"></path>
                        <path className="caavo-logo__1" d="M14.953 22.792a5.355 5.355 0 0 1 7.572-7.573l1.893 1.89 1.893-1.9-1.89-1.895a8.032 8.032 0 1 0 0 11.36l13.25-13.25-1.89-1.893L22.53 22.79a5.354 5.354 0 0 1-7.574 0"></path>
                        <path className="caavo-logo__2" d="M11.168 26.58a10.71 10.71 0 1 1 15.144-15.147l1.888 1.893 1.9-1.893-1.9-1.893a13.386 13.386 0 1 0 0 18.932L41.455 15.22l-1.893-1.894-13.25 13.253a10.707 10.707 0 0 1-15.144 0"></path>
                        <path className="caavo-logo__3" d="M43.348 17.113L30.1 30.365a16.063 16.063 0 1 1 0-22.718l1.89 1.893 1.893-1.893-1.893-1.894a18.74 18.74 0 1 0 0 26.506L45.24 19z"></path>
                        <path className="caavo-logo__right" d="M52.178 38c-6.474 0-10.725-3.272-13.707-6.124l-.07-.065-1.1-1.11 5.96-5.96 1.08 1.08c2.364 2.26 4.608 3.76 7.85 3.76a10.572 10.572 0 1 0 0-21.143c-2.74 0-5.36 1.256-7.783 3.735l-1.15 1.154-5.973-5.946 1.125-1.13C42.38 2.17 47.157 0 52.18 0a19 19 0 1 1 0 38"></path>
                    </svg>
                </div>
                <div className="header-right">
                    <button onClick={openModal} className="bgcol mr-5">Create Group</button>
                    <span className="userEmail">Hi, Aman Singh</span>
                    <button className="bgcol">Logout</button>
                </div>
            </div>
            <div className="container mt-3">
                <div className='text-center'>Groups</div>
                <div className='row justify-content-around'>
                    {props.reduxState.length !== 0 ? props.reduxState.map((item, i) => (
                        <div key={i} className="col-md-5 mb-2 group d-flex">
                            <img className="groupsImg" src={item.imageUrl} alt="user" />
                            <form className='col-md-9'>
                                <div className="row mb-1">
                                    <label className='col-md-4'>Name:</label>
                                    <span className="nameDesc col-md-8">{item.gName}</span>
                                </div>
                                <div className="row">
                                    <label className='col-md-4'>Description:</label>
                                    <span className="nameDesc col-md-8">{item.gDesc}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button type="button" className="btn-secondary1" onClick={()=>props.openModal(i)}>Update</button>
                                    <button type="button" className="btn-primary1" onClick={()=>props.deleteGroup(i)} >Remove</button>
                                </div>
                            </form>
                        </div>
                    )) :
                        <div className="modalTitle text-center">
                            <div><h5>You don't have any group please create new one,</h5></div>
                            <div><h5>By clicking the Create Group button from the header.</h5></div>

                        </div>
                    }

                </div>
            </div>
            <Modal/>
        </div>
    )
}
const mapStateToProps = state => ({
    reduxState:state.projectState.data
})

export default connect(mapStateToProps, {openModal,deleteGroup})(Dashboard);
