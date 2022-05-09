import React, { useState } from "react";
import "./style.css";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
function Main() {
  const [details, setdetails] = useState(false);

  const data = [
    {
      id: 1,
      foldername: "Api log",
      connection: "1",
      size: "12.05 mb",
      files: "2",

      details: {
        name: "API_LOG_2020",
        src: "https://img.icons8.com/color/344/ms-excel.png",
        rows: "10 L",
        file1: "API_LOG_2020",
        file2: "API_LOG_2019",
        connection: "1",
        size: "12.05 mb",
        files: "2",
        date: "2020-1",
      },
    },
    {
      id: 2,
      foldername: "Myfolder",
      size: "18.05 mb",
      files: "2",

      details: {
        name: "Myfolder_2020",
        src: "https://img.icons8.com/color/344/microsoft-word-2019--v2.png",
        connection: "1",
        size: "18.05 mb",
        files: "2",
        rows: "10 L",
        file1: "Downlaods_2020",
        file2: "Downloads_2019",
        date: "2021-1",
      },
    },
    {
      id: 3,
      foldername: "Downloads 2",
      size: "10.05 mb",
      files: "2",

      details: {
        name: "Downloads_2021",
        src: "https://img.icons8.com/color/344/microsoft-word-2019--v2.png",
        size: "10.05 mb",
        connection: "1",
        files: "2",
        rows: "10 L",
        file1: "Downlaods_2022",
        file2: "Downloads_2021",
        date: "2018-10",
      },
    },
  ];
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-8 left-div ">
            <div className="row ">
              <p>connection 1</p>
              {data.map((val) => {
                return (
                  <div className="col-md-4 folder_div">
                    <div className="folder">
                      <FolderOpenOutlinedIcon
                        onClick={() => setdetails(val.details, true)}
                      />
                      <div>
                        <h6>{val.foldername}</h6>
                        <p>
                          {" "}
                          {val.files} files,{val.size}
                        </p>
                      </div>
                      <div className="options">
                        <MoreVertSharpIcon />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {details ? (
            <div className="col-md-4">
              <div className="top-right ">
                <img src={details.src} width={"150px"} />
                <div style={{ textAlign: "left" }}>
                  <h5>{details.name}</h5>
                  <p>connection :{details.connection}</p>
                  <p>File Size :{details.size}</p>
                  <p>No. of Files :{details.files}</p>
                  <p>Rows :{details.rows}</p>
                </div>
              </div>
              <p style={{ textAlign: "center", marginTop: "20px" }}>
                Data Files
              </p>
              <div className="row bottom-right " style={{ textAlign: "left" }}>
                <div className="col-md-8">
                  <table class="table caption-top">
                  
                    <thead>
                      <tr>
                        <th scope="col">File Name</th>
                        <th scope="col">Sent data</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{details.file1}</td>
                        <td>{details.date}</td>
                      </tr>
                      <tr>
                        <td>{details.file2}</td>
                        <td>{details.date}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
