Vagrant.configure("2") do |config|
	config.vm.box = "terrywang/archlinux"

	# Create a forwarded port mapping which allows access to a specific port
	# within the machine from a port on the host machine. In the example below,
	# accessing "localhost:8080" will access port 80 on the guest machine.
	config.vm.network "forwarded_port", guest: 3000, host: 3000, protocol: "tcp"

	config.vm.provision "shell", inline: <<-SHELL
		pacman -Syu --noconfirm
		pacman -S nodejs npm
	SHELL
end
