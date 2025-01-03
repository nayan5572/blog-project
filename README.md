<h1>Blog-Project</h1>

<p>My project is only for back end. A user can create blog. And can update. Can see all blogs.</p>

<h1>Live Demo</h1>

Live Link: <a href="https://blog-project-gamma-amber.vercel.app/" target="_blank">Blog Project Link</a>

<h2>Github Source Code:</h2>

**GitHub Repository**: <a href="https://github.com/nayan5572/blog-project" target="_blank">Blog GitHub Assignment Link</a>

**Assignment-3 Video Link**: <a href="https://drive.google.com/file/d/1zAb3MMeTFBdX7WrF0hp9dcxo5hRCcQ4i/view?usp=sharing" target="_blank">Assignment-3 Video Link</a>

<h2>Admin Panel</h2>
<p><span>Email:</span> nayan@gmail.com</p>
<p><span>Password:</span> 123456</p>

<h1>Features</h1>
<hr/>

<h3>User Roles</h3>
<h4>Admin</h4>
<ul>
    <li>Can delete any blog.</li>
    <li>Can block/unblock any user by updating the <code>isBlocked</code> property.</li>
    <li>Cannot update any blog.</li>
</ul>

<h4>User</h4>
<ul>
    <li>Can register and log in.</li>
    <li>Can create, update, and delete <strong>their own blogs</strong>.</li>
    <li>Cannot perform admin actions.</li>
</ul>

<h3>Authentication & Authorization</h3>
<ul>
    <li><strong>Authentication</strong>: Users must log in to perform create, update, and delete operations.</li>
    <li><strong>Authorization</strong>: Differentiates actions based on user roles (Admin or User).</li>
</ul>

<h2>API Features</h2>
<h3>Blog API</h3>
<ul>
    <li>Viewing blogs with details like title, content, author information, and timestamps.</li>
    <li>Searching, sorting, and filtering blogs.</li>
</ul>

<h2>Models</h2>

<h3>User Model</h3>
<pre>

name: string;
email: string;
password: string;
role: "admin" | "user"; // User role (default: "user")
isBlocked: boolean; // Flag to indicate if user is blocked (default: false)
createdAt: Date;
updatedAt: Date;

</pre>

<h3>Blog Model</h3>
<pre>
  title: string; 
  content: string; 
  author: ObjectId; 
  isPublished: boolean; // Publication status (default: true)
  createdAt: Date; 
  updatedAt: Date; 
</pre>
