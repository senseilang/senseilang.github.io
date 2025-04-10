import http.server
import socketserver

PORT = 8000  # You can change this if needed

# Set up the server to serve files from the current directory
Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()
