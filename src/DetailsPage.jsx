import {useLocation} from "react-router-dom";

export default function DetailsPage() {
    const location = useLocation();
    const {name, age, email, gender} = location.state || {};
    return (
        <div
            style={{
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                width: "100%",
                fontWeight: 500,
            }}
        >
            <h1>DetailsPage</h1>
            <p>
                <strong>Name:</strong>
                {name}
            </p>
            <p>
                <strong>age:</strong>
                {age}
            </p>
            <p>
                <strong>email:</strong>
                {email}
            </p>
            <p>
                <strong>gender:</strong>
                {gender}
            </p>
        </div>
    );
}
