import { useFormik } from "formik";
import { debounce } from "lodash";

const FormikForm = () => {
    console.log("formik");
    const formik = useFormik({
        initialValues: { example: "", test: "" },
        onSubmit: () =>
            debounce((form) => {
                console.log(form);
            }, 500),
    });
    return (
        <>
            <h1>Formik</h1>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name="example"
                    value={formik.values.example}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <input
                    type="text"
                    name="test"
                    value={formik.values.test}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <input type="submit" />
            </form>
        </>
    );
};

export default FormikForm;
