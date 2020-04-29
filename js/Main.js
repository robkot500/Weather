import React, {useState} from 'react';

import Card from "./Card";
import Clock from "./Clock";




const Main = ({data})=>{

    if(data == null){

    }



    return(
        <>
            <div className="row">
                <div className="col-4">
                    <div className="box box-3">

                        <Card data={data} index={0} type={'big'} dayOfWeek={100}/>
                    </div>
                </div>
                <div className="col-4">
                    <div className="box box-3 last-box-3">

                        <Card data={data} index={8} type={'big'} dayOfWeek={1}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4 col-44">
                    <div className="box box-4">
                        <Card data={data} index={16} type={'small'} dayOfWeek={2}/>
                    </div>
                    <div className="box box-4">
                        <Card data={data} index={24} type={'small'} dayOfWeek={3}/>
                    </div>
                </div>
                <div className="col-4 col-44">
                    <div className="box box-4">
                        <Card data={data} index={32} type={'small'} dayOfWeek={2}/>
                    </div>
                    <div className="box box-4">
                        <Card data={data} index={39} type={'small'} dayOfWeek={3}/>
                    </div>
                </div>

            </div>












        </>
    )
}
export default Main