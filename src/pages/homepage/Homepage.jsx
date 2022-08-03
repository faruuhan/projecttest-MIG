import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { Table, Button, TextInput, Textarea, Radio, Select, Group } from "@mantine/core";

const Homepage = () => {
  const [dataCustomer, setDataCustomer] = useState([]);
  const [searchCustomer, setSearchCustomer] = useState(dataCustomer);
  const [filterData, setFilterData] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [status, setStatus] = useState("");
  const [token] = useState(localStorage.getItem("auth"));
  const [isReady, setIsReady] = useState(false);
  const MySwal = withReactContent(Swal);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      fecthData();
      setIsReady(true);
    } else {
      navigate("/login");
    }
  }, []);

  const dataCustomerSort = searchCustomer.sort((a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const handleFilter = (params) => {
    setFilterData(params);
    if (params === "false") {
      const filter = dataCustomer.filter((row) => {
        return row.status === false;
      });
      setSearchCustomer(filter);
    } else if (params === "true") {
      const filter = dataCustomer.filter((row) => {
        return row.status === true;
      });
      setSearchCustomer(filter);
    } else {
      setSearchCustomer(dataCustomer);
    }
  };

  const escapeRegExp = (value) => {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };

  const handleSearch = (keywordSearch) => {
    const searchRegex = new RegExp(escapeRegExp(keywordSearch), "i");
    const dataFindCustomer = dataCustomer.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field] ? row[field].toString() : null);
      });
    });

    //mengecek jika filter data digunakan bersamaan dengan find data
    if (filterData === "false") {
      const filter = dataFindCustomer.filter((row) => {
        return row.status === false;
      });
      setSearchCustomer(filter);
    } else if (filterData === "true") {
      const filter = dataFindCustomer.filter((row) => {
        return row.status === true;
      });
      setSearchCustomer(filter);
    } else {
      setSearchCustomer(dataFindCustomer);
    }
  };

  const fecthData = async () => {
    await axios
      .get("https://mitramas-test.herokuapp.com/customers", {
        headers: {
          Authorization: token,
        },
      })
      .then((ress) => {
        setDataCustomer(ress.data.data);
        setSearchCustomer(ress.data.data);
      })
      .catch((err) => {
        if (err.response.request.status === 401) {
          needLogin();
        }
      });
  };

  const handleDelete = async (id) => {
    MySwal.fire({
      title: "You will delete customer data ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then(async (ress) => {
      if (ress.isConfirmed) {
        await axios
          .delete("https://mitramas-test.herokuapp.com/customers", {
            headers: {
              Authorization: token,
            },
            data: {
              id,
            },
          })
          .then((ress) => {
            MySwal.fire("Delete Data", "", "success");
            fecthData();
          })
          .catch((err) => {
            MySwal.fire("Delete Data", "Can't delete data, try again!", "error");
          });
      }
    });
  };

  const handleAddData = async () => {
    await axios
      .post(
        "https://mitramas-test.herokuapp.com/customers",
        {
          name: name,
          address: address,
          country: country,
          phone_number: phoneNumber,
          job_title: jobTitle,
          status: status,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((ress) => {
        MySwal.fire("Add Data", "", "success");
        fecthData();
        setName("");
        setAddress("");
        setCountry("");
        setPhoneNumber("");
        setJobTitle("");
        setStatus("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateData = async () => {
    MySwal.fire({
      title: "You will update customer data ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then(async (ress) => {
      await axios
        .put(
          "https://mitramas-test.herokuapp.com/customers",
          {
            id: id,
            name: name,
            address: address,
            country: country,
            phone_number: phoneNumber,
            job_title: jobTitle,
            status: status,
          },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((ress) => {
          MySwal.fire("Update Data", "", "success");
          fecthData();
          setId("");
          setName("");
          setAddress("");
          setCountry("");
          setPhoneNumber("");
          setJobTitle("");
          setStatus("");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const handleEdit = (e) => {
    setId(e.id);
    setName(e.name);
    setAddress(e.address);
    setCountry(e.country);
    setPhoneNumber(e.phone_number);
    setJobTitle(e.job_title);
    setStatus(e.status ? "true" : "false");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id) {
      handleAddData();
    } else {
      handleUpdateData();
    }
  };

  const needLogin = () => {
    MySwal.fire({
      icon: "error",
      title: "Token Expired!",
      text: "Please! Relogin",
      confirmButtonText: "Login",
    }).then(() => {
      navigate("/login");
      localStorage.removeItem("auth");
    });
  };

  if (isReady) {
    return (
      <div className=" container mx-auto">
        <div className="py-5">
          <h1 className="text-xl font-bold">Data Customer</h1>
        </div>

        <div className="py-5">
          <form onSubmit={handleSubmit}>
            <TextInput placeholder="Name" label="Name" value={name} onChange={(event) => setName(event.target.value)} required />
            <Textarea placeholder="Address" label="Address" value={address} onChange={(event) => setAddress(event.target.value)} required />
            <TextInput placeholder="Country" label="Country" value={country} onChange={(event) => setCountry(event.target.value)} required />
            <TextInput placeholder="Phone Number" label="Phone Number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} required />
            <TextInput placeholder="Job Title" label="Job Title" value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} required />
            <Radio.Group value={status} onChange={setStatus} label="Status" required>
              <Radio value="true" label="True" />
              <Radio value="false" label="False" />
            </Radio.Group>
            <Group className="mt-5">
              <Button type="submit" className="bg-sky-600 text-white">
                Submit
              </Button>
            </Group>
          </form>
        </div>

        <div className="py-5 flex gap-4">
          <TextInput placeholder="Search Data" label="Search Data" onChange={(event) => handleSearch(event.target.value)} />
          <Select
            label="Filter by Status"
            placeholder="Choose Status"
            onChange={handleFilter}
            data={[
              { value: "all", label: "All Status" },
              { value: "true", label: "True" },
              { value: "false", label: "False" },
            ]}
          />
        </div>

        <div className="flex">
          <Table highlightOnHover striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Country</th>
                <th>Phone Number</th>
                <th>Job Title</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dataCustomer &&
                searchCustomer &&
                dataCustomerSort.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.address}</td>
                      <td>{data.country}</td>
                      <td>{data.phone_number}</td>
                      <td>{data.job_title}</td>
                      <td>{data.status ? "true" : "false"}</td>
                      <td className="flex gap-2">
                        <Button className="bg-red-600 text-white" onClick={() => handleDelete(data.id)}>
                          Delete
                        </Button>
                        <Button className="bg-green-600 text-white" onClick={() => handleEdit(data)}>
                          Edit
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
};

export default Homepage;
