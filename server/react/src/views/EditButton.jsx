import React, { useState } from "react";
import { useStateContext } from "../context/ContextProvider.jsx";
import ImageEditBoxExample from "./ImageEditBoxExample.jsx";

export default function EditButton({ imageId }) {

    const { token } = useStateContext();
    const [isEditClicked, setIsEditClicked] = useState(false);

    const handleEditClick = () => {
        setIsEditClicked(true);
    };

    return (
        <>
            {token && (
                <>
                    <button className="btn-edit" onClick={handleEditClick}>
                        Edit
                    </button>
                    {isEditClicked && <ImageEditBoxExample imageId={imageId} />}
                </>
            )}
        </>
    );
}
