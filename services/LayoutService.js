const STYLES = `
    <style>
        body, html { padding: 0; margin: 0 }
        body {
            font-family: 'Calibri', sans-serif;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .content {
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.5);
        }
        .content * {
            margin: 5px;
        }
        .error {
            color: red;
        }
    </style>
`;

const injectStyles = (layoutProvider) => (...args) => `${layoutProvider(...args)}${STYLES}`;

const getLoginPageLayout = (
    username = '',
    shouldShowCredentialsErrorMessage = false,
) => `
    <body>
        <div class="content">
        <p>Please enter your credentials below to log in</p>
            <form action="/login">
                <label for="username">Username</label>
                <input placeholder="username" name="username" id="username" value="${username}" required></input><br> \
                <label for="password">Password</label>
                <input placeholder="password" name="password" id="password" type="password" required></input><br> \
                ${shouldShowCredentialsErrorMessage ? '<p class="error">Provided credentials are incorrect</p>' : ''}
                <input type="submit" value="Submit">
            </form>
        </div>
    </body>
`;

const getWelcomePageLayout = (name) => `
    <body>
        <div class="content">
            <p><b>Welcome, ${name}!</b></p>
        </div>
    </body>
`;

module.exports = {
    getLoginPageLayout: injectStyles(getLoginPageLayout),
    getWelcomePageLayout: injectStyles(getWelcomePageLayout),
};
