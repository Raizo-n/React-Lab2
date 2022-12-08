const socialIcons = [
    {
        icon: "instagram",
        title: "Instagram"
    },
    {
        icon: "facebook-f",
        title: "Facbook"
    },
    {
        icon: "twitter",
        title: "Twitter"
    },
    {
        icon: "linkedin",
        title: "LinkedIn"
    },
    {
        icon: "youtube",
        title: "YouTube"
    },
    {
        icon: "github",
        title: "Github"
    }
]

function IconComponent({icon, title}) {
    return (
    <div className="button">
        <div className="icon">
            <i className='fa `fa-${icon}`'></i>
        </div>
        <span>{title}</span>
    </div>
    );
  }

const test = (
    <div className={'wrapper'}>
        <IconComponent icon={socialIcons[0].icon} title={socialIcons[0].title}/>
        <IconComponent icon={socialIcons[1].icon} title={socialIcons[1].title}/>
        <IconComponent icon={socialIcons[2].icon} title={socialIcons[2].title}/>
        <IconComponent icon={socialIcons[3].icon} title={socialIcons[3].title}/>
        <IconComponent icon={socialIcons[4].icon} title={socialIcons[4].title}/>
        <IconComponent icon={socialIcons[5].icon} title={socialIcons[5].title}/>
    </div>
)

ReactDOM.render(test, document.getElementById('root'))
