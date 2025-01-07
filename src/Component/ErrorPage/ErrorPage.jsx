  const ErrorPage = () => {
      return (
          <div className="error-container d-flex flex-column align-items-center justify-content-center text-center min-vh-100">
              <h1 className="display-1 fw-bold">404</h1>
              <h2 className="mb-4">Oops! Page Not Found</h2>
              <p className="text-muted mb-4">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
              <a href="/" className="btn btn-primary px-4 py-2">Return to Homepage</a>
          </div>
      );
  };

  export default ErrorPage;