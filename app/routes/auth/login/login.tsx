import { AdminThumbImage } from '~/assets/images'
import LoginForm from '~/routes/auth/login/components/login-form'

// import Language from './components/language'

const Login = () => {
  return (
    <section className='w-full h-[100vh] grid grid-cols-2'>
      <div className='grid justify-center items-center bg-[#F2F6FA]'>
        <img src={AdminThumbImage} alt='Admin thumbnail' />
      </div>
      <div className='grid justify-center items-center bg-white relative'>
        <LoginForm />
      </div>
    </section>
  )
}

export default Login
