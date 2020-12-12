import React, { useState, useEffect } from 'react'
import urlMaping from '../../common/API/Api'
import apiCall from '../../common/API/ApiCall'
import $ from 'jquery'
import { connect } from 'react-redux'
import { addData, clearEditData, update, deleteGroup } from '../../../redux/Action'


function Modal(props) {

  const [imgUrl, setImgUrl] = useState('images/pic.png')
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')

  const closeModal = () => {
    $("#testmodal").modal("hide");
    props.clearEditData()
    setData((data) => data.map((item) => ({
      Image: item.Image,
      id: item.id,
      name: item.name,
      checked: false,
    })));
    setName('')
    setImgUrl('images/pic.png')
    setDescription('')
  }
  useEffect(() => {
    apiCall(urlMaping.dataApi(), (result) => {
      result = result.map(item => ({
        Image: item.Image,
        id: item.id,
        name: item.name,
        checked: false
      }))
      setData(result)
    })
  }, [])

  useEffect(() => {
    if (Object.keys(props.editData).length > 0) {
      setData(props.editData.data);
      setImgUrl(props.editData.imageUrl);
      setName(props.editData.gName);
      setDescription(props.editData.gDesc)
    }
  }, [props])

  const setGroupLogo = (file) => {
    if (!file) {
      return
    } else {
      let reader = new FileReader()
      reader.onloadend = () => {
        setImgUrl(reader.result);
      }
      reader.readAsDataURL(file)
    }
  }
  const saveData = () => {
    if (name.trim() === '') {
      alert('Please Enter Group Name.');
      return;
    } else if (description.trim() === '') {
      alert('Please Enter Group Description.');
      return;
    }
    if (props.editData.index >= 0) {
      props.update(
        {
          data: data,
          imageUrl: imgUrl,
          gName: name,
          gDesc: description
        }, props.editData.index)
    } else {
      props.addData({
        data: data,
        imageUrl: imgUrl,
        gName: name,
        gDesc: description
      })
    }
    closeModal();
  }
  const toggalSelect = (e, id) => {
    let i=data.findIndex((item)=>item.id===id)
    data[i].checked = e.target.checked;
    setData((data) => [...data])
  }
  const remove = (id) => {
    closeModal()
    props.deleteGroup(id)
  }
const sortData=()=>{
  debugger
  if(type===''){
    data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    setType('1')
  }else{
    data.reverse()
  }
  setData([...data])
}
  return (
    <div className="modal fade custommodal" id="testmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" data-backdrop="static" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content bg-color">
          <div className="modal-header border-0 align-items-center">
            <h5 className="modal-title modalTitle col-md-11 text-center" id="addusersmodalTitle">
              {Object.keys(props.editData).length > 0 ? 'Update Group' : 'Create Group'}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => closeModal()}
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
          </div>
          <div className="modal-body custommodalbodytwo">
            <div className="d-flex">
              <div className="displayGrid titleColor">
                <img src={imgUrl} className="groupImg mr-4" alt='logo' />
                <input className="file" onChange={(e) => setGroupLogo(e.target.files[0])} accept="image/x-png,image/gif,image/jpeg" id='file' type="file" />
                <label htmlFor='file' className="ml-2">
                  <i className="fa fa-camera"></i>
                  <span className="ml-2">Group Logo</span>
                </label>
              </div>
              <form className='col-md-8'>
                <div className="mb-3">
                  <label className='col-md-6 titleColor'>Name</label>
                  <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="group name" />
                </div>
                <div>
                  <label className='col-md-6 titleColor'>Description</label>
                  <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} placeholder="group description" />
                </div>
              </form>
            </div>
            <button type="button" className="btn-secondary1 m-2" onClick={()=>sortData()}>Sort</button>
            <div className='container scroll'>
              <div className="row justify-content-center">
                {data.map((item, i) => (
                  <div key={i} className="card customCard">
                    <label className="container1">
                      <input onChange={(e) => toggalSelect(e, item.id)} type="checkbox" checked={item.checked} id={item.id} />
                      <span className="checkmark"></span>
                    </label>
                    <label htmlFor={item.id}>
                      <img className="card-img-top cardImg" src={item.Image} alt="user" />
                      <div className="cardName">
                        <p className="card-text">{item.name}</p>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="modal-footer border-0 justify-content-center mb-3">
            <button type="button" className="btn-secondary1" onClick={() => saveData()}>{Object.keys(props.editData).length > 0 ? 'Update' : 'Create'}</button>
            <button type="button" className="btn-primary1" disabled={Object.keys(props.editData).length === 0} onClick={() => remove(props.editData.index)}>Remove</button>
          </div>
        </div>
      </div>
    </div>

  )
}

// export default Modal
const mapStateToProps = state => ({
  reduxState: state.projectState.data,
  editData: state.projectState.editData
})

export default connect(mapStateToProps, { addData, clearEditData, update, deleteGroup })(Modal);