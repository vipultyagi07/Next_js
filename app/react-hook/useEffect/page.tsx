"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [userId, setUserId] = useState("");
    const [submittedUserId, setSubmittedUserId] = useState("");
    const [data, setData] = useState(null);

    useEffect(() => {
        if (submittedUserId) { // Fetch only when submit button is clicked
            fetch(`https://jsonplaceholder.typicode.com/users/${submittedUserId}`)
                .then((response) => response.json())
                .then((jsonResponse) => {
                    setData(jsonResponse);
                    console.log("Fetched Data:", jsonResponse);
                })
                .catch((error) => console.error("Error fetching data:", error));
        }
    }, [submittedUserId]); // Runs only when submittedUserId changes

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            {/* Input field for entering user ID */}
            <input
                type="text"
                placeholder="Enter user ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="p-2 border rounded"
            />

            {/* Button to trigger fetch */}
            <button
                onClick={() => setSubmittedUserId(userId)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Submit
            </button>

            {/* Display fetched data if available */}
            {data && (
                <div className="p-4 border rounded bg-gray-100">
                    <h2 className="text-lg font-bold">User Details</h2>
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                </div>
            )}
        </div>
    );
};

export default Page;
