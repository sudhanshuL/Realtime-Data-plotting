import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router';
import { useNavigate } from 'react-router-dom' ;
import axios from 'axios';

const AddEquities = () => {

    const navigate = useNavigate();
    const [id, setid] = useState("")
    const [name, setname] = useState("")
    const [ticker, setticker] = useState("")
    const [description, setdescription] = useState("")
    const [start_date, setstart_date] = useState("")
    const [end_date, setend_date] = useState("")
    const [sector, setsector] = useState("")
    const [industry, setindustry] = useState("")
    const [employees_count, setemployees_count] = useState("")
    const [sic_no, setsic_no] = useState("")
    const [location, setlocation] = useState("")
    const [exchange_id, setexchange_id] = useState("")
    const [cik_no, setcik_no] = useState("")
    const [cusip, setcusip] = useState("")
    const [currency_id, setcurrency_id] = useState("")
    const [data_source_id, setdata_source_id] = useState("")
    const [ckr_log, setckr_log] = useState("")
    const [similar_fund_log, setsimilar_fund_log] = useState("")
    const [address, setaddress] = useState("")
    const [company_name, setcompany_name] = useState("")
    const [phone_no, setphone_no] = useState("")
    const [website, setwebsite] = useState("")
    const [is_Active, setis_Active] = useState("")
    const [url_slug, seturl_slug] = useState("")
    const [delisted_date, setdelisted_date] = useState("")
    const [delisted_reason, setdelisted_reason] = useState("")
    const [image_name, setimage_name] = useState("")
    const [image_aspect_ratio, setimage_aspect_ratio] = useState("")
    const [cumulative_return, setcumulative_return] = useState("")
    

    const AddEquitiesInfo=async()=>{
        let formField = new FormData()
        formField.append('id',id)
        formField.append('name',name)
        formField.append('ticker',ticker)
        formField.append('description',description)
        formField.append('start_date',start_date)
        formField.append('end_date',end_date)
        formField.append('sector',sector)
        formField.append('industry',industry)
        formField.append('employess_count',employees_count)
        formField.append('sic_no',sic_no)
        formField.append('location',location)
        formField.append('exchange_id',exchange_id)
        formField.append('cik_no',cik_no)
        formField.append('cusip',cusip)
        formField.append('currency_id',currency_id)
        formField.append('data_source_id',data_source_id)
        formField.append('ckr_log',ckr_log)
        formField.append('similar_fund_log',similar_fund_log)
        formField.append('address',address)
        formField.append('company_name',company_name)
        formField.append('phone_no',phone_no)
        formField.append('website',website)
        formField.append('is_Active',is_Active)
        formField.append('url_slug',url_slug)
        formField.append('delisted_date',delisted_date)
        formField.append('delisted_reason',delisted_reason)
        formField.append('image_name',image_name)
        formField.append('image_aspect_ratio',image_aspect_ratio)
        formField.append('cumulative_return',cumulative_return)
        // console.log(formField);
        console.log(formField.getAll('start_date'))
        
        

        await axios({
            method: 'post',
            url:'http://localhost:8000/companies/',
            data: formField
          }).then(response=>{
            console.log(response.data);
            // navigate.push('/')
            navigate("/")
          })
    }

    return (

        <div>
            <br></br>
            <h1>Add Equities</h1>
            <div className="container">
                <div className="form-group">
                    <div className="form-control">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter ID"
                                name="id"
                                value={id}
                                onChange={(e) => setid(e.target.value)}
                            />
                        </div>
                        <div className="form-group">

                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter name"
                                name="name"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter description"
                                name="description"
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter ticker"
                                name="ticker"
                                value={ticker}
                                onChange={(e) => setticker(e.target.value)}
                            />
                        </div>
                        <h4>Start Date</h4>
                        <div className="form-group">
                            <input
                                type="date"
                                className="form-control form-control-lg"
                                placeholder="Enter start date"
                                name="start_date"
                                value={start_date}
                                onChange={(e) => setstart_date(e.target.value)}
                            />
                        </div>

                        <h4>End Date</h4>
                        <div className="form-group">
                            <input
                                type="date"
                                className="form-control form-control-lg"
                                placeholder="Enter end date"
                                name="end_date"
                                value={end_date}
                                onChange={(e) => setend_date(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter sector"
                                name="sector"
                                value={sector}
                                onChange={(e) => setsector(e.target.value)}
                            />
                        </div>
                        

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter industry"
                                name="industry"
                                value={industry}
                                onChange={(e) => setindustry(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter employess count"
                                name="employees_count"
                                value={employees_count}
                                onChange={(e) => setemployees_count(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter sic number"
                                name="sic_no"
                                value={sic_no}
                                onChange={(e) => setsic_no(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter location"
                                name="location"
                                value={location}
                                onChange={(e) => setlocation(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter echange ID"
                                name="exchange_id"
                                value={exchange_id}
                                onChange={(e) => setexchange_id(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter cik number"
                                name="cik_no"
                                value={cik_no}
                                onChange={(e) => setcik_no(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter cusip"
                                name="cusip"
                                value={cusip}
                                onChange={(e) => setcusip(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter currency id"
                                name="currency_id"
                                value={currency_id}
                                onChange={(e) => setcurrency_id(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Data source ID"
                                name="data_source_id"
                                value={data_source_id}
                                onChange={(e) => setdata_source_id(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter ckr log"
                                name="ckr_log"
                                value={ckr_log}
                                onChange={(e) => setckr_log(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter similar fund log"
                                name="similar_fund_log"
                                value={similar_fund_log}
                                onChange={(e) => setsimilar_fund_log(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter address"
                                name="address"
                                value={address}
                                onChange={(e) => setaddress(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter company name"
                                name="company_name"
                                value={company_name}
                                onChange={(e) => setcompany_name(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter phone number"
                                name="phone_no"
                                value={phone_no}
                                onChange={(e) => setphone_no(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter website"
                                name="website"
                                value={website}
                                onChange={(e) => setwebsite(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter is Active"
                                name="is_Active"
                                value={is_Active}
                                onChange={(e) => setis_Active(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter url slug"
                                name="url_slug"
                                value={url_slug}
                                onChange={(e) => seturl_slug(e.target.value)}
                            />
                        </div>

                        <h4>Delisted Date</h4>
                        <div className="form-group">
                            <input
                                type="date"
                                className="form-control form-control-lg"
                                placeholder="Enter Delisted date"
                                name="delisted_date"
                                value={delisted_date}
                                onChange={(e) => setdelisted_date(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Delisted Reason"
                                name="delisted_reason"
                                value={delisted_reason}
                                onChange={(e) => setdelisted_reason(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter image"
                                name="image_name"
                                value={image_name}
                                onChange={(e) => setimage_name(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter image aspect ratio"
                                name="image_aspect_ratio"
                                value={image_aspect_ratio}
                                onChange={(e) => setimage_aspect_ratio(e.target.value)}
                            />
                        </div>
                        <h4>Cumulative return</h4>
                        <div className="form-group">
                            <input
                                type="datetime-local"
                                className="form-control form-control-lg"
                                placeholder="Enter cumulative return"
                                name="cumulative_return"
                                value={cumulative_return}
                                onChange={(e) => setcumulative_return(e.target.value)}
                            />
                        </div>
                        {/* <button>submit</button> */}
                        <button className="btn btn-success" onClick={AddEquitiesInfo}>Add Equities</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddEquities;