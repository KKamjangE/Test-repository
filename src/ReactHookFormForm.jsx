import { useForm } from "react-hook-form";

const ReactHookFormForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    console.log("react hook form");
    return (
        <>
            <h1>React Hook Form</h1>
            <form onSubmit={handleSubmit((form) => console.log(form))}>
                <input type="text" {...register("example")} />
                <input type="text" {...register("test")} />
                <input type="submit" />
            </form>
        </>
    );
};

export default ReactHookFormForm;
