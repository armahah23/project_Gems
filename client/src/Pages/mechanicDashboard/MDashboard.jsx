
import './mdashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="logo">
                    <img src="autocare-logo.png" alt="AutoCare Logo" />
                </div>
                <nav className="menu">
                    <ul>
                        <li><button>Work</button></li>
                        <li><button>Add Work</button></li>
                        <li><button>Assign Work</button></li>
                        <li><button>Notification</button></li>
                        <li><button>Setting</button></li>
                        <li><button>Profile</button></li>
                    </ul>
                </nav>
            </aside>
            <main className="dashboard">
                <h1>Dashboard</h1>
                <div className="work-grid">
                    <div className="work-item">Add Work</div>
                    <div className="work-item">On going Work</div>
                    <div className="work-item">Add Work</div>
                    <div className="work-item">Add Work</div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
