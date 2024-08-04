
Vagrant.configure("2") do |config|

  # Frontend Server
  config.vm.define "frontend" do |frontend|
    frontend.vm.box = "bento/ubuntu-24.04"
    frontend.vm.network "private_network", type: "dhcp"
    frontend.vm.network "forwarded_port", guest: 3000, host: 3000
    frontend.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
    end
  end

  # Backend Server
  config.vm.define "backend" do |backend|
    backend.vm.box = "bento/ubuntu-24.04"
    backend.vm.network "private_network", type: "dhcp"
    backend.vm.network "forwarded_port", guest: 5000, host: 5000
    backend.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
    end
  end

  # Database Server
  config.vm.define "database" do |db|
    db.vm.box = "bento/ubuntu-24.04"
    db.vm.network "private_network", type: "dhcp"
    db.vm.network "forwarded_port", guest: 27017, host: 27017
    db.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
    end
  end

  # Load Balancer
  config.vm.define "nginx" do |nginx|
    nginx.vm.box = "bento/ubuntu-24.04"
    nginx.vm.network "private_network", type: "dhcp"
    nginx.vm.network "forwarded_port", guest: 80, host: 8080
    nginx.vm.network "forwarded_port", guest: 443, host: 8443
    nginx.vm.provider "virtualbox" do |vb|
      vb.memory = "512"
    end
  end

  # Provisioning with Ansible
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "main.yml"
  end

end
