import React from 'react'
import { Formik, Field } from 'formik'
import Input from '../../components/Commons/Input';
import { useRouter } from 'next/router';

const genders = [{ id: 'g1', gender: 'MALE' }, { id: 'g2', gender: 'FEMALE' }, { id: 'g3', gender: 'NOTYET' }];

const SignUp = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Sign in page</h1>
      <Formik
        initialValues={{
            id: '',
            password: '',
            name: '',
            gender: '',
            country: '', 
            mainAddress: '',
            addressDetail: '',
            postalCode: '',
        }}
        validate={values => { // initialValues 객체가 values로 전달되고, 검증 로직 작성
            const errors = {};
            if (!values.id) errors.id = 'ID는 필수 입력 항목입니다.';

            return errors; // errors가 하단의 errors에 props 형태로 전달되는 방식
        }}
        onSubmit={values => {
            // fetch() -> 스프링 부트 서버의 특정 URL로 보낼 코드

            const {id, password, name, gender, country, mainAddress, addressDetail, postalCode} = values;

            const submitValue = {
                id,
                password,
                name,
                gender,
                address: {
                    mainAddress,
                    addressDetail,
                    country,
                    postalCode
                }
            };

            console.log(submitValue);
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submitValue),
            };

            fetch('http://localhost:8090/users', options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('실패', error));

            // router.push('/');
         }}>
        {
          ({values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting}) => (
            <div className='mt-10 sm:mt-0'>
              <div className='md:grid md:grid-cols-3 md:gap-6'>
                <div className='md:col-span-1'>
                  <div>
                    <h3>Personal Information</h3>
                    <p>User a permanent address where you can receive mail.</p>
                  </div>
                </div>
                <div className='mt-5 md:col-span-2 md:mt-0'>
                  <form onSubmit={handleSubmit}>
                    <div className='overflow-hidden shadow sm:rounded-md'>
                      <div className='bg-white px-4 py-5 sm:p-6'>
                        <div className='grid grid-cols-6 gap-6'>
                          {/* User ID */}
                          <Input type='text' 
                            // default attributes
                            id='user-id' name='id'
                            htmlFor='user-id' labelText='ID' placeholder='아이디를 입력하세요' 
                            validationMessage={errors.id && touched.id && errors.id}
                            // Formik Validating // 유효성 처리용
                            value={values.id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // tailwindcss
                            divClassName='col-span-6 sm:col-span-3'
                            labelClassName='block text-sm font-medium text-gray-700'
                            inputClassName='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                          />
                          {/* Password */}
                          <Input type='text' id='user-password' name='password'
                            htmlFor='user-password' labelText='Password' placeholder='비밀번호를 입력하세요' 
                            validationMessage={errors.password && touched.password && errors.password}
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            divClassName='col-span-6 sm:col-span-3'
                            labelClassName='block text-sm font-medium text-gray-700'
                            inputClassName='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'/>
                          {/* name */}
                          <Input type='text' id='user-name' name='name'
                            htmlFor='user-name' labelText='Name' placeholder='이름을 입력하세요' 
                            validationMessage={errors.name && touched.name && errors.name}
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            divClassName='col-span-6 sm:col-span-3'
                            labelClassName='block text-sm font-medium text-gray-700'
                            inputClassName='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'/>
                          {/* Gender */}
                          {genders.map((gender) => (
                            <Input type='radio' key={gender.id} id={gender.id} name='gender'
                            htmlFor={gender.id} labelText={gender.gender} 
                            validationMessage={errors.gender && touched.gender && errors.gender}
                            value={gender.gender}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            divClassName='flex items-center mb-2'
                            labelClassName='ml-3 mr-3 block text-sm font-medium text-gray-700'
                            inputClassName='h-4 w-4 border-gray-300 text-indico-600 focus:ring-indico-500'/>
                          ))}
                          {/* Country */}
                          <div className='col-span-6 sm:col-span-3'>
                          <label htmlFor="country">Country</label>
                          <Field id='country' name='country' as='select' className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'>
                              <option value='ko'>Republic of Korea</option>
                              <option value='ja'>Japan</option>
                              <option value='ch'>China</option>
                              <option value='usa'>United States of America</option>
                            </Field>
                          </div>
                          {/* address - MainAddress, addressDetail, postal code */}
                          <Input type='text' id='main-address' name='mainAddress'
                            htmlFor='main-address' labelText='기본 주소' placeholder='기본 주소를 입력하세요' 
                            validationMessage={errors.mainAddress && touched.mainAddress && errors.mainAddress}
                            value={values.mainAddress}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            divClassName='col-span-6 sm:col-span-3'
                            labelClassName='block text-sm font-medium text-gray-700'
                            inputClassName='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'/>

                          <Input type='text' id='address-detail' name='addressDetail'
                            htmlFor='address-detail' labelText='상세 주소' placeholder='상세 주소를 입력하세요' 
                            validationMessage={errors.addressDetail && touched.addressDetail && errors.addressDetail}
                            value={values.addressDetail}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            divClassName='col-span-6 sm:col-span-3'
                            labelClassName='block text-sm font-medium text-gray-700'
                            inputClassName='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'/>

                          <Input type='text' id='postal' name='postalCode'
                            htmlFor='postal' labelText='우편 번호' placeholder='우편 번호를 입력하세요' 
                            validationMessage={errors.postalCode && touched.postalCode && errors.postalCode}
                            value={values.postalCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            divClassName='col-span-6 sm:col-span-3'
                            labelClassName='block text-sm font-medium text-gray-700'
                            inputClassName='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'/>
                        </div>
                        <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                          <button type='submit' className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white whadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>회원 가입</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )
        }
        {/* purple {}: JS Object type */}
        {/* yellow () => (): (Arrow function parameter) => (rendering element) */}
        {/* blue {}: JS Expression */}
      </Formik>
    </div>
  )
}

export default SignUp