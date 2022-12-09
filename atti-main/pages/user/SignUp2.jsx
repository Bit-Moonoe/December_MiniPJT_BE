import React from 'react';
import axios from 'axios';
import { useState } from "react";
import { useRouter } from "next/router";


const SignUp2 = () => {

  // const [id, setId] = useState("");
	const [nickName, setNickName] = useState("");
	const [pwd, setPwd] = useState("");
	// const [checkPwd, setCheckPwd] = useState("");
	// const [email, setEmail] = useState("");

	// const navigate = useNavigate();
	const router = useRouter();


	const changeNickName = (event) => {
		setNickName(event.target.value);
	}

	const changePwd = (event) => {
		setPwd(event.target.value);
	}


	/* 닉네임 공백 및 중복 체크 */
	const checkIdDuplicate = async () => {

		if(nickName===""){
			alert("닉네임을 입력해주세요")
		}else{

		await axios.get("http://localhost:3040/user/duplicate", { params: { nickName: nickName } })
			.then((resp) => {
				console.log("[Join.js] checkIdDuplicate() success :D");
				console.log(resp.data);

				if (resp.status == 200) {
					alert("사용 가능한 아이디입니다.");
				}
				
			})
			.catch((err) => {
				console.log("[Join.js] checkIdDuplicate() error :<");
				console.log(err);

				const resp = err.response;
				if (resp.status == 400) {
					alert(resp.data);
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

		if(nickName === "" || pwd === ""){
			alert("닉네임 및 패스워드를 입력해주세요.")
		}else{

		await axios.post("http://localhost:3040/user/sign-up", req)
			.then((res) => {
				console.log("[Join.js] join() success :D");
				console.log(res.data);

				alert(res + "님 회원가입을 축하드립니다 🎊");
				// navigate("/");
				router.push("/");

			})
      .catch((err) => {
				console.log("[Join.js] join() error :<");
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
		<div>
			<table className="table">
				<tbody>
					<tr>
						<th>닉네임</th>
						<td>
							<input type="text" value={nickName} onChange={changeNickName} size="50px" />
							<button className="btn btn-outline-danger" onClick={checkIdDuplicate}><i className="fas fa-check"></i> 닉네임 중복 확인</button>
						</td>
					</tr>

					<tr>
						<th>비밀번호</th>
						<td>
							<input type="password" value={pwd} onChange={changePwd} size="50px" />
						</td>
					</tr>
				</tbody>
			</table><br />

			<div className="my-3 d-flex justify-content-center">
				<button className="btn btn-outline-secondary" onClick={registration}><i className="fas fa-user-plus"></i> 회원가입</button>
			</div>

		</div>
	);
}

export default SignUp2