
import React from 'react';
import {Component} from 'react';
class ExpenseEntryItem extends React.Component{
    render(){
        return(
            <div>
                <div><b>Item:</b><em>MangoJuice</em></div>
                <div><b>Amount:</b><em>30.0</em></div>
                <div><b>Spend Date:</b><em>2024-07-01</em></div>
                <div><b>Category</b><em>food</em></div>
            </div>
        );
    }
}
export default ExpenseEntryItem;