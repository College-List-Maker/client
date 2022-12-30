import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../Cookie";
import { Skeleton } from "@chakra-ui/react";
import { Form } from "./Form";
import { UserCollegeData } from "../types";
import { Dashboard } from "./Dashboard";

export function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [formData, setFormData] = useState<UserCollegeData>();

    useEffect(() => {
        fetchSubmittedData();
    }, []);

    const fetchSubmittedData = () => {
        axios
            .get(
                "https://collegy-server.herokuapp.com/college/get-submit-data/" +
                    getCookie("visitorId=")
            )
            .then((res: any) => {
                setFormData(res.data[0]);
                setIsLoading(false);
            })
            .catch((err: any) => {
                console.error(err);
            });
    };

    return (
        <div>
            {isLoading ? (
                <Skeleton>Test</Skeleton>
            ) : formData ? (
                <Dashboard data={formData} />
            ) : (
                <Form />
            )}
        </div>
    );
}
