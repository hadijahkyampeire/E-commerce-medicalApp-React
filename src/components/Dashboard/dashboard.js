import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMedicineAction } from '../../redux/Actions/medicine/medicineActions';
import AddMedicine from './AddMedicine';
import Navbar from '../Navbar';

const Medicine = (props) =>(
    <div>
    <div class="card medicine-card">
  <img class="card-img-top" src="../../medicine.jpeg" />
  <div class="card-body">
    <h5 class="card-title">Medicine</h5>
    <p class="card-text">Medicine description</p>
    <a href="#" data-toggle="tooltip" title="More about the medicine!">Read More</a>
  </div>
</div>

<div class="tooltip bs-tooltip-top" role="tooltip">
  <div class="arrow"></div>
  <div class="tooltip-inner">
    Uses:
    Dosage:
    Side Effects:
    Precautions:
    Prices:
  </div>
</div>
    </div>
)

class Dashboard extends Component{
    componentDidMount() {
        this.props.fetchMedicineAction();
        
    }
    render(){
        const { medicine } = this.props;
        console.log(medicine)
        const items = medicine;
        console.log(items)
      
        //  if(!items){
        //      return (
        //          <div>
        //         </div>)
        //  }
        //  else{
        // const medicine_items = items.map(medicine =>
        //     <Medicine
        //     key={medicine.id}
        //     id={medicine.id}
        //     name={medicine.name}
        //     description={medicine.description}
        //     getMedicines = {this.props.fetchMedicineAction}
        //     />
        //     )
        //  console.log(medicine_items)
        return(
            <div>
            <Navbar/>
            <div className="dashboard">
            <AddMedicine />
            <hr/>
            medicine_items
            <Medicine/>
            </div>
            </div>
        )
    }
}
// }

const mapStateToProps = (state) =>{
    return {
        medicine: state.medicine,
}
}
export default connect(mapStateToProps,{fetchMedicineAction})(Dashboard);