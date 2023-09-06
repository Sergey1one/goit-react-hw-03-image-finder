
import React, { Component } from "react";
import {  Formik } from 'formik';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {SearchbarComp, SearchBtn, SearchBtnLabel, SearchForm,SearchField} from './Searchbar.styled'

class Searchbar extends Component {

    state = {
        inputData: ''
    }
    
    
    onFormSubmit = ({input},{resetForm}) => {
       
        this.props.onSubmit(input)
         resetForm();
    }
    render() {
        return (
            <SearchbarComp>
            <Formik initialValues={{ input: '' }}
            onSubmit={this.onFormSubmit}> 
                    <SearchForm> 
                         <SearchBtn type="submit">
      <SearchBtnLabel>Search</SearchBtnLabel>
    </SearchBtn>
                        <SearchField type='text' name='input' placeholder='Search images and photos'
                            autoFocus
                        autoComplete='off'></SearchField>
                        
                
</SearchForm>
                </Formik>
                 <ToastContainer
          position="top-center"
autoClose={5000}
theme="colored"/>
                </SearchbarComp>)
    }
}

export default Searchbar