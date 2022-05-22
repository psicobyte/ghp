import React from 'react'

const Profile = () => {

    return  (
        <div>
            <h2>Perfil</h2>
            <div>
                <img src="https://avatars0.githubusercontent.com/u/1206823" alt="ridiculous profile image"
                     title="ridiculous profile image" className="marcoc"/>
            </div>
            <h3>Psicobyte</h3>
            <div>Angel Pablo Hinojosa</div>
            <div><a href={"https://www.psicobyte.com/"}>Mi blog</a></div>
            <div><a href={"https://github.com/psicobyte"}>Mi cuenta en github</a></div>
            <div><a href={"https://github.com/phinojosa-codeko"}>Mi <em>otra</em> cuenta en github</a></div>
            <div><a href={"https://bitbucket.org/psicobyte/"}>Mi cuenta en bitbucket</a></div>
            <div><a href={"https://gitlab.com/psicobyte"}>Mi cuenta en gitlab</a></div>
            <div><a href={"https://pypi.org/user/psicobyte/"}>Mi cuenta en PyPI</a></div>
        </div>
    )
}

export default Profile