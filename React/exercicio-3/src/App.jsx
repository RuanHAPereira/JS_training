import Profile from "./components/Profile";
import perfilIgm from './assets/perfilImg.jpeg'

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar={perfilIgm}
        nome="Ruan Henrique"
        bio="Desenvolvedor React"
        email="ruan94pereira@gmail.com"
        phone="+55 24 99291-6223"
        githubUrl="https://github.com/RuanHAPereira"
        linkedinUrl="https://www.linkedin.com/in/ruan-henrique-484b401a3/"
        instagramUrl="https://www.instagram.com/ruanh_pereira/"
      />    
    </div>
  )
}