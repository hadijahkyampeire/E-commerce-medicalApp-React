import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addMedicineAction } from '../../redux/Actions/medicine/medicineActions';

class AddMedicine extends Component {
    state = {
        name: '',
        description: '',
        uses: '',
        dosage: '',
        sideeffects: '',
        precautions: '',
        price: ''
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleAddMedicine = (event) => {
        const {name, description, uses, dosage, sideeffects, precautions, price} = this.state
        event.preventDefault();
        this.props.addMedicineAction({name, description, uses, dosage, sideeffects, precautions, price})
        .then(
            this.props.fetchMedicineAction
        )
    }
    render(){
        const {name, description, uses, dosage, sideeffects, precautions, price} = this.state
        return (
            <div>
            <button className="add-btn" data-toggle="modal" data-target="#addMedicineModal"><i className="fa fa-plus-circle" id="add-medicine">Add Medicine</i></button>
            <div className="modal fade" id="addMedicineModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Add Medicine</h5>
                <button type="button" className="close" id="closeAddModal" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div className="modal-body">
        <form onSubmit={this.handleAddMedicine}>
        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" name="name" placeholder="panadol" value={name} onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
        <label htmlFor="description">Description</label>
        <input type="text" className="form-control" name="description" id="description" aria-describedby="emailHelp" placeholder="Enter decription" value={description} onChange={this.handleInputChange}/>
        </div>
        <div className="form-group">
        <label htmlFor="name">Uses</label>
        <input type="text" className="form-control" id="uses" name="uses" placeholder="medicine uses" value={uses} onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
        <label htmlFor="name">Dosage</label>
        <input type="text" className="form-control" id="dosage" name="dosage" placeholder="panadol" value={dosage} onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
        <label htmlFor="name">Side Effects</label>
        <input type="text" className="form-control" id="sideeffects" name="sideeffects" placeholder="Rushes" value={sideeffects} onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
        <label htmlFor="precautions">Precautions</label>
        <input type="text" className="form-control" name="precautions" id="precautions" placeholder="Enter precautions" value={precautions} onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
        <label htmlFor="price">Medicine Price</label>
        <input type="text" className="form-control" name="price" id="price" placeholder="Enter price" value={price} onChange={this.handleInputChange} />
        </div>
        <button type="submit" className="btn btn-success .signup-btn">Save</button>
        </form>
        </div>
        </div>
        </div>
        </div>
            </div>
            )
    }
    

}
export default connect(null, {addMedicineAction})(AddMedicine);

