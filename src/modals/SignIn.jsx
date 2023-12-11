import SlideSelect from "../components/SlideSelect";

import ModalHeader from '../components/ModalHeader';
import Logo from '../components/Logo';
import ModalProgress from '../components/ModalProgress';
import ModalFooter from '../components/ModalFooter';
import ButtonGreen from '../components/ButtonGreen';

export default function SignInModal() {
    const loginMethods = [
        { Icon: '/google.svg',   name: 'Google',   url: '/api/sign-in/with-google'   },
        { Icon: '/facebook.svg', name: 'Facebook', url: '/api/sign-in/with-facebook' },
        { Icon: '/spotify.svg',  name: 'Spotify',  url: '/api/sign-in/with-spotify'  },
        { Icon: '/steam.svg',    name: 'Steam',    url: '/api/sign-in/with-steam'    },
        { Icon: '/linkedin.svg', name: 'LinkedIn', url: '/api/sign-in/with-linkedin' },
    ];

    const loginMethod = 0;

    return (
        <div
            className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-start text-[#3b3b3b] overflow-y-auto z-50"
            style={{opacity: 1}}
        >
            <div className="fixed w-full h-full bg-white opacity-90"></div>
            <div className="mt-[90px] mb-[45px] flex relative justify-center">
                <Logo linkClasses="w-[90px] h-[90px] pt-[calc(-90px/2-19px)] absolute top-[-45px] z-50" />

                <div className="relative border-2 border-solid border-[#eee] rounded-[14px] bg-white overflow-hidden w-[380px]">
                    <div className="px-[19px] pt-[19px]">
                        <ModalHeader />
                    </div>

                    <div className="px-[19px] py-[19px]">
                        <ModalProgress stages={[ 'Logowanie' ]} />
                    </div>

                    <div className="px-[19px] pb-[19px]">
                        <SlideSelect selected={loginMethod} options={loginMethods}  />
                    </div>

                    <div className="flex flex-col justify-between px-[19px] py-[19px] bg-[#eee]">
                        <div className="pb-[19px]">
                            Pierwsze logowanie oznacza rejestrację i akceptację <span className="font-medium">polityki prywatności</span>
                        </div>
                        <div className="flex items-center grow">
                            <ButtonGreen>Zaloguj się</ButtonGreen>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
