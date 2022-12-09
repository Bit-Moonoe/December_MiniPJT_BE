import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from "react";

const SignUp = () => {
	const [nickName, setNickName] = useState("");
	const [pwd, setPwd] = useState("");
	const [checkPwd, setCheckPwd] = useState("");
	const [conditions, setConditions] = useState(false);
	const [duplicateCheck, setDuplicateCheck] = useState(false);
	const router = useRouter();

	const changeConditions = () => {
		conditions === false ? setConditions(true) : setConditions(false);
	};

	const changeNickName = (event) => {
		setNickName(event.target.value);
	}

	const changePwd = (event) => {
		setPwd(event.target.value);
	}

	const changeCheckPwd = (event) => {
		setCheckPwd(event.target.value);
	}


	/* 닉네임 중복 체크 */
	const checkNickNameDuplicate = async () => {

		if (nickName === "") {
			alert("닉네임을 입력해주세요")
		} else {
			await axios.get("http://localhost:3040/user/duplicate", { params: { nickName: nickName } })
				.then((res) => {
					console.log("checkNickNameDuplicate() success");
					console.log(res.data);

					if (res.status == 200) {
						alert("사용 가능한 아이디입니다.");
						setDuplicateCheck(true);
					}
				})
				.catch((err) => {
					console.log("checkIdDuplicate() error");
					console.log(err);

					const res = err.response;
					if (res.status == 400) {
						alert(res.data);
					}
				});
		}

	}

	/* 회원가입 */
	const registration = async () => {

		const req = {
			// id: id,
			nickName, nickName,
			pwd: pwd
			// checkPwd: checkPwd,
			// email: email
		}
		if (nickName === "" && checkPwd === "" && pwd === "") {
			alert("닉네임과 패스워드를 꼭 입력해주세요.")
		} else if (nickName === "") {
			alert("닉네임을 입력해주세요.")
		} else if (duplicateCheck === false) {
			alert("닉네임 중복체크를 해주세요.")
		} else if (checkPwd === "" || pwd === "") {
			alert("Password 및 Confirm Password를 모두 입력해주세요.")
		} else if (conditions === false) {
			alert("약관에 동의해주세요.")
		} else if (checkPwd != pwd) {
			alert("Password와 Confirm Password가 서로 다릅니다.")
		}
		else {

			await axios.post("http://localhost:3040/user/sign-up", req)
				.then((res) => {
					console.log("registration() success");
					console.log(res.data.nickName);

					alert(res.data.nickName + "님 회원가입 되었습니다.");
					router.push("/user/SignIn");

				})
				.catch((err) => {
					console.log("registration() error");
					console.log(err);

					alert(err.response.data.message);

					const resp = err.response;
					if (resp.status == 400) {
						alert(resp.data);
					}
				});
		}
	}

	return (

		<div className="w-full overflow-scroll h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center">
			<div className="bg-white py-6 px-10 sm:max-w-md w-full ">
				<div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
					Atti's Counseling <br></br>
					Registration
				</div>
				<div className="">
					<div >
						<input
							className="focus:outline-none border-b w-4/5 pb-1 border-sky-400 placeholder-gray-500 mb-2"
							type="text"
							placeholder="NickName "
							onChange={changeNickName}
						/>
						<button className="rounded-full  p-1 w-1/5 text-base bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold"
							onClick={checkNickNameDuplicate}>
							CHECK
						</button>
					</div>
					<div className="">
						<input
							type="password"
							className="focus:outline-none border-b w-full pb-1 border-sky-400 placeholder-gray-500 mb-2"
							placeholder="Password "
							onChange={changePwd}
						/>
						<input
							type="password"
							className="focus:outline-none border-b w-full pb-1 border-sky-400 placeholder-gray-500 mb-8"
							placeholder="Confirm Password "
							onChange={changeCheckPwd}
						/>
					</div>
					<div className="flex">
						<input type="checkbox" onClick={changeConditions} className="border-sky-400 " defaultValue="" />
						<div className="px-3 text-gray-500">
							I accept terms &amp; conditions
						</div>
					</div>
					<div className="flex justify-center my-6">
						<button className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold "
							onClick={registration}>
							Create Account
						</button>
					</div>
					<div className="flex justify-center ">
						<p className="text-gray-500">이미 계정이 있으십니까? </p>
						<Link href="/user/SignIn" className="text-sky-600 pl-2">
							로그인 화면으로
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp