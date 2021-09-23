import React, { Component } from 'react';
import moment from 'moment';

class Dashboard extends Component {
    render() {
        console.log(this.props.frames);
        return(
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Frames
                    </h1>
                </section>
                <section className="content">
                    <button type="button" className="add-frame-btn btn btn-block btn-primary btn-lg">Add Frame</button>
                    <div className="col-sm-12">
                    <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                        <th>ID</th>
                        <th>Frame Name</th>
                        <th>Frame Code</th>
                        <th>Frame Description</th>
                        <th>Frame Image</th>
                        <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.frames.map((frame,index) => (
                    <tr key={`frame-${index}`}>
                        <td>{index+1}</td>
                        <td>{frame.Frame_Name}</td>
                        <td>{frame.Frame_Code}</td>
                        <td>{frame.Frame_Description	}</td>
                        <td><img src={frame.Frame_External_Link} /></td>
                        <td>
                            <span className="frame-edit">
                                <i className="fa fa-edit"></i>
                            </span>
                            <span className="frame-delete">
                            {" "}
                                <i className="fa fa-trash-o"></i>
                            </span>
                        </td>
                    </tr>
                 ))} 
                 </tbody>
                </table>
              </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Dashboard;