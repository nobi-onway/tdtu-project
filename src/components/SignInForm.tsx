'use client'
import { AccountType } from "@/config/dataType";
import { useForm } from "react-hook-form";

const correctAccount : AccountType = {
    username: "chohieu@gmail.com",
    password: "hieungu123"
}

type SignInFormPropsType = {
    onSignIn: (account : AccountType) => void,
}

function SignInForm(props : SignInFormPropsType) {
    const { onSignIn } = props;
    const { register, handleSubmit, formState: { errors } } = useForm<AccountType>();

    const onSubmit = (data : AccountType) => {
        console.log(data);
        onSignIn(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-96 flex flex-col gap-2">
            <label className="flex flex-col gap-1">
                <span className="font-bold text-sm">Tên đăng nhập</span>
                <input {...register("username", { required: "Tên đăng nhập không được để trống", validate: (val : string) => { if(val !== correctAccount.username) return "Tên đăng nhập không tồn tại!" } })} className="border border-black shadow border-opacity-20 rounded p-2" placeholder="Nhập tên sản phẩm" type="text" name="username"/>
            </label>
            <span className="text-sm text-rose-500">{errors.username?.message}</span>
            <label className="flex flex-col gap-1">
                <span className="font-bold text-sm">Mật khẩu</span>
                <input  {...register("password", { required: "Vui lòng nhập mật khẩu", validate: (val : string) => { if(val !== correctAccount.password) return "Mật khẩu không đúng!"} })} className="border border-black shadow border-opacity-20 rounded p-2" placeholder="Nhập tên sản phẩm" min={0} type="password" name="password"/>
            </label>
            <span className="text-sm text-rose-500">{errors.password?.message}</span>
            <div className="w-full flex items-center justify-center">
                <input className="text-white w-full hover:cursor-pointer bg-[#22744C] px-4 py-2 rounded uppercase text-sm mt-4" type="submit" value={"Đăng nhập"}/>
            </div>
        </form>
    )
}

export default SignInForm;