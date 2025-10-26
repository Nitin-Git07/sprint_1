import { Home, Bell, Users, Settings, Bookmark, Globe, MessageCircle } from "lucide-react";

const Rightbar = () => {
  return (
    <div id="responsive" className="sticky top-0 z-30 h-screen overflow-y-auto p-2 hidden lg:block">
      <ul className="menu bg-base-200 w-full rounded-xl shadow-md p-2">

        <li className="menu-title">Main</li>
        <li><a><Home size={18}/> Dashboard</a></li>
        <li><a><Bell size={18}/> Notifications</a></li>
        <li><a><MessageCircle size={18}/> Messages</a></li>

        <div className="divider"></div>

        <li className="menu-title">Community</li>
        <li><a><Users size={18}/> Friends</a></li>
        <li><a><Globe size={18}/> Explore</a></li>
        <li><a><Bookmark size={18}/> Saved</a></li>

        <div className="divider"></div>

        <li className="menu-title">Settings</li>
        <li><a><Settings size={18}/> Preferences</a></li>
      </ul>
    </div>
  );
};

export default Rightbar;
