pipeline {
    agent any

    stages {

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh '''
                    rm -rf node_modules package-lock.json
                    npm install --legacy-peer-deps
                    '''
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh '''
                    chmod +x node_modules/.bin/vite
                    npm run build
                    '''
                }
            }
        }

        stage('Deploy Backend') {
            steps {
                sh '''
                pm2 delete backend || true
                cd backend
                pm2 start server.js --name backend
                '''
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh '''
                nohup npx serve -s frontend/dist -l 3000 > frontend.log 2>&1 &
                '''
            }
        }
    }
}