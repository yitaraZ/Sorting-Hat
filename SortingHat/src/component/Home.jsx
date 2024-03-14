import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import Table from "./Table";

export default function Home(){
    return(
        <>
        <Header />
        <Welcome />
        <br/>
        <br/>
        <Table/>
        </>
    )
}