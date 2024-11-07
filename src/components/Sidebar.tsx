import { MdSpaceDashboard } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { IoMdExit } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../AuthContext";
import { useState } from 'react';

function Sidebar() {
    const [activeMenu, setActiveMenu] = useState(location.pathname);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleMenuClick = (menuItem: string) => {
        setActiveMenu(menuItem);
    };

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login'); // Redirect to login page after logout
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <>
            <div className={`left-menu ${isCollapsed ? 'collapsed' : ''}`}>
                <div className={`logo-holder ${isCollapsed ? 'collapsed-logo-holder' : ''}`}>
                    <img src="company-logo.svg" alt="Company Logo" className={`logo ${isCollapsed ? 'collapsed-hide-logo' : ''}`} />
                    {isCollapsed ? (
                      <TbLayoutSidebarRightCollapseFilled className="collapse-icon" onClick={toggleCollapse}/>
                    ) : (
                        <TbLayoutSidebarLeftCollapseFilled className="collapse-icon" onClick={toggleCollapse} />
                    )}
                </div>
                <div className="menu-items-holder">
                    <Link
                        to='/dashboard'
                        key='dashboard'
                        className={`menu-item ${activeMenu === '/dashboard' ? 'active' : ''} ${isCollapsed ? 'collapse-menu-item' : ''}`}
                        onClick={() => handleMenuClick('/dashboard')}
                    >
                        <MdSpaceDashboard />
                        {!isCollapsed && <div className="menu-text">Dashboard</div>}
                    </Link>

                    <Link
                        to='/profile'
                        key='profile'
                        className={`menu-item ${activeMenu === '/profile' ? 'active' : ''} ${isCollapsed ? 'collapse-menu-item' : ''}`}
                        onClick={() => handleMenuClick('/profile')}
                    >
                        <FaMapMarkerAlt />
                        {!isCollapsed && <div className="menu-text">Profile</div>}
                    </Link>

                    <div
                        className={`menu-item logout-btn ${isCollapsed ? 'collapse-menu-item' : ''}`}
                        onClick={handleLogout}
                    >
                        <IoMdExit />
                        {!isCollapsed && <div className="menu-text">Log out</div>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;