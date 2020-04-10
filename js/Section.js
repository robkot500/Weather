import React from 'react';
import Header from "./Header";

const Section = () => {
    return(
<>

    <div className="row">

        <div className="col-2 ">
            <div className="box box-4 first-small">
                <div className="cont cont-small ">
                    <div className="text">Aspect ratio</div>
                </div>
            </div>
        </div>
        <div className="col-2">
            <div className="box box-4">
                <div className="cont cont-small">
                    <div className="text">Aspect ratio</div>
                </div>
            </div>
        </div>
        <div className="col-2">
            <div className="box box-4">
                <div className="cont cont-small">
                    <div className="text">Aspect ratio</div>
                </div>
            </div>
        </div>
        <div className="col-2">
            <div className="box box-4 last-small">
                <div className="cont cont-small">
                    <div className="text">Aspect ratio</div>
                </div>
            </div>
        </div>

    </div>
    </>
    )
}
export default Section