import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Form from "./Form/Form";

function UIView(props) {
    return (
        <div>
            <Header {...props} />
            <Main {...props} />
            <Footer {...props} />
        </div>

    );
}


function Main(props) {
    if (props.todos.size === 0) {
        return null;
    }
    return (
        <section id="main">
            <Form />
        </section>
    );
}


export default UIView;