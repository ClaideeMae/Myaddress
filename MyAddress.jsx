import React, { useState } from "react";

const AddressList = () => {
  const [addresses, setAddresses] = useState([
    {
      fullName: "Retsu",
      address: "Day-as, Cordova, Cebu",
      postcode: "Cebu-Cordova-Day-as",
      phoneNumber: "09432765431",
    },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedAddress, setEditedAddress] = useState({
    fullName: "",
    address: "",
    postcode: "",
    phoneNumber: "",
  });

  const addNewAddress = () => {
    const newAddress = {
      fullName: "New Name",
      address: "New Address",
      postcode: "New Postcode",
      phoneNumber: "PhoneNumber",
    };
    setAddresses([...addresses, newAddress]);
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedAddress({ ...addresses[index] });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveEdit = () => {
    const updatedAddresses = [...addresses];
    updatedAddresses[editingIndex] = { ...editedAddress };
    setAddresses(updatedAddresses);
    setEditingIndex(null);
  };

  const deleteAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-100 p-8 shadow-lg rounded-lg mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">My Address</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition duration-200 ease-in-out"
          onClick={addNewAddress}
        >
          +
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr className="text-left text-gray-700">
              <th className="p-4">Full Name</th>
              <th className="p-4">Address</th>
              <th className="p-4">Postcode</th>
              <th className="p-4">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((address, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                <td className="p-4 text-gray-800">{address.fullName}</td>
                <td className="p-4 text-gray-800">{address.address}</td>
                <td className="p-4 text-gray-800">{address.postcode}</td>
                <td className="p-4 text-gray-800">{address.phoneNumber}</td>
                <td
                  className="p-4 text-blue-500 hover:underline cursor-pointer"
                  onClick={() => handleEditClick(index)}
                >
                  Edit
                </td>
                <td
                  className="p-4 text-red-500 hover:underline cursor-pointer"
                  onClick={() => deleteAddress(index)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingIndex !== null && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Edit Address
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveEdit();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={editedAddress.fullName}
                  onChange={handleEditChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={editedAddress.address}
                  onChange={handleEditChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Postcode</label>
                <input
                  type="text"
                  name="postcode"
                  value={editedAddress.postcode}
                  onChange={handleEditChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={editedAddress.phoneNumber}
                  onChange={handleEditChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setEditingIndex(null)}
                  className="bg-gray-400 text-white p-2 rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressList;
