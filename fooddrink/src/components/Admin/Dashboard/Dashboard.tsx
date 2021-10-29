import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Dashboard.scss"
import queryString from "query-string"
import Pagination from "../../share/Pagination";
import { useTranslation } from "react-i18next";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [userList, setUserList] = useState([] as any[]);
  const [totalUser, setTotalUser] = useState(0);
  const [filters, setFilters] = useState({
    page: 1,
    filter: ""
  })

  function handleClickPage(page: number) {
    setFilters({
      ...filters,
      page: page
    })
  }

  useEffect(() => {
    const filterString = queryString.stringify(filters);
    const requestUrl = `/api/v1/users?${filterString}`
    axios.get(requestUrl)
      .then(res => {
        const resJson = JSON.parse(JSON.stringify(res.data))
        setUserList(resJson.lists);
        console.log(userList.length);
        setTotalUser(resJson.totalUser);
      })
      .catch(error => console.log(error))
  }, [filters])
  return (
    <div >
      <div className="table-user bg-light">
        <div className="col-md-12" >
          <p style={{ float: "right" }} className="result-show-message">Showing 1–{userList.length} of {totalUser} results</p>
        </div>
        <table className="table table-bordered table-striped table-inverse">
          <thead className="thead-inverse">
            <tr>
              <th>{t("useradmin.username")}</th>
              <th>{t("useradmin.email")}</th>
              <th>{t("useradmin.role")}</th>
              <th>{t("useradmin.status")}</th>
              <th>{t("useradmin.action")}</th>
            </tr>
          </thead>
          <tbody>
            {
              userList.map(user => (
                <tr key={user.id}>
                  <td scope="row">{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role == "admin" ? (
                    <button type="button" className="btn btn-success">{t("useradmin.admin")}</button>
                  ) : (
                    <button type="button" className="btn btn-info">{t("useradmin.customer")}</button>
                  )}</td>
                  <td>{user.status}</td>
                  <td>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Unactive</button>
                  </td>
                </tr>
              ))
            }


          </tbody>
        </table>
      </div>
      <Pagination total={totalUser} handleClickPage={handleClickPage} limit={9} />
    </div>
  );
}

export default Dashboard;