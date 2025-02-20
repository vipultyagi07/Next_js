"use client";
import React, { useState } from "react";

const Page = () => {
    const [userId, setUserId] = useState("");

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <input
                type="text"
                placeholder="Enter user ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="p-2 border rounded"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Submit
            </button>
        </div>
    );
};

export default Page;
