pipeline{
    agent any
    
   
    stages {
        
      

        stage("Build"){
            steps{
                echo "running"
                sh '''
                    
                    sudo ssh -i /var/lib/jenkins/simple.pem -t -o StrictHostKeyChecking=no ubuntu@ec2-34-238-250-219.compute-1.amazonaws.com
                    cd /var/www
                    sudo rm -rf html
                    sudo mkdir html
                    cd html
                    sudo git init
                    sudo git config --global --add safe.directory /var/www/html
                    sudo git remote add origin https://github.com/cent-kanayo/containers.git
                    sudo git pull origin main
                   
                '''
            }
        }
          
        stage('Test') {
            steps {
                echo 'Testing..'

                
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh '''
                    sudo docker compose -f docker-compose.yaml up -d 
                '''
            }
        }
    }
}