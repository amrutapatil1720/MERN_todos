import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="card  text-center">
                <div className="card-header p-3 mb-2 bg-info text-white">
                    <div className="d-inline-block mr-3">
                        <img src="../../../icon4.png" height="60" width="60"></img>
                    </div>
                    <div className="d-inline-block mr-3">
                        <h1><span className="text-dark mr-3">MERN</span>Todo List</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
