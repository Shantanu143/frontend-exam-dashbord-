import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const AddUsers = () => {
  const [user, setUser] = useState([
    {
      avatar: "",
      email: "",
      name: "",
      _id: "",
    },
  ]);

  const [students, setStudents] = useState([
    {
      name: "",
      _id: "",
    },
  ]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const controller = new AbortController();

    const data = async () => {
      const res = await fetch(`/api/user/all`, {
        signal: controller.signal,
      });

      const { success, user, message } = await res.json();
      if (success === true) {
        setUser(user);
      } else {
        toast.error(message);
      }
    };

    const StudentsData = async () => {
      const res = await fetch(`/api/exam/students/${id}`, {
        signal: controller.signal,
      });
      const { success, data } = await res.json();

      if (success === true) {
        setStudents(data);
      }
    };

    StudentsData();
    data();
    return () => controller.abort();
  }, []);

  console.log(students);

  const handleAdd = async ({ userId, name }) => {
    const res = await fetch(`/api/exam//isAdded/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: userId,
        name: name,
      }),
    });

    const { success, res: Res, message } = await res.json();

    success ? toast.message(message) : "";

    if (Res === "added") {
      setStudents({
        ...students,
        _id: id,
      });
      console.log(message);
    }

    console.log(students);
  };

  const handleDelete = (id) => {};

  return (
    <section className="container px-4 mx-auto">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">
          Students Can Access The Exam
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          100 Students
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Add/Remove</span>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {user.map((data) => {
                    const { avatar, name, _id, email } = data;
                    return (
                      <tr key={_id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src={avatar}
                                alt={name}
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  {name}
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  {email}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <button
                            onClick={() =>
                              handleAdd({ userId: _id, name: name })
                            }
                            type="button"
                            className="p-3 bg-green-600 rounded-md font-semibold hover:opacity-80"
                          >
                            Add / Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddUsers;
